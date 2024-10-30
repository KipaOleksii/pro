import React, { useEffect, useState } from "react";
import Status from "./Status";
import { useParams } from "react-router-dom";
import { getStatus, updateStatus } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const StatusContainer = (props) => {
  const { userId: paramUserId } = useParams(); // Получаем userId из параметров URL
  const userId = paramUserId || props.authUserId; // Если userId отсутствует в параметрах URL, используем authUserId
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status); // Локальный статус

  // Получаем статус при загрузке компонента или смене userId
  useEffect(() => {
    if (userId) {
      props.getStatus(userId); // Вызываем getStatus через props
    }
  }, [userId, props]);

  // Синхронизируем локальное состояние статуса с props
  useEffect(() => {
    setStatus(props.status); // Обновляем локальный статус, когда изменяется props.status
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status); // Вызываем updateStatus через props с текущим статусом
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Status
      activateEditMode={activateEditMode}
      deactivateEditMode={deactivateEditMode}
      onStatusChange={onStatusChange}
      editMode={editMode}
      status={status}
    />
  );
};

const mapStateToProps = (state) => ({
  status: state.profilePage.status,
  authUserId: state.auth.id,
});

export default connect(mapStateToProps, { getStatus, updateStatus })(StatusContainer);
