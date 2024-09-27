import React, { useEffect } from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";

const UsersContainer = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  isFetching,
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
}) => {
  
  useEffect(() => {
    // Этот эффект выполняется при монтировании компонента
    const fetchUsers = async () => {
      toggleIsFetching(true); // Устанавливаем флаг загрузки
      try {
        const response = await axios.get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
          { withCredentials: true }
        );
        toggleIsFetching(false); // Убираем флаг загрузки
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      } catch (error) {
        console.error("Ошибка при загрузке пользователей:", error);
        toggleIsFetching(false);
      }
    };
    fetchUsers();
  }, [currentPage, pageSize, setUsers, setTotalUsersCount, toggleIsFetching]); // Зависимости, при изменении которых эффект будет выполнен снова

  const onPageChanged = async (pageNumber) => {
    setCurrentPage(pageNumber); // Устанавливаем текущую страницу
    toggleIsFetching(true); // Устанавливаем флаг загрузки
    try {
      const response = await axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
        { withCredentials: true }
      );
      toggleIsFetching(false); // Убираем флаг загрузки
      setUsers(response.data.items);
    } catch (error) {
      console.error("Ошибка при смене страницы:", error);
      toggleIsFetching(false);
    }
  };

  return (
    <>
      {isFetching && <PreLoader />} {/* Показываем прелоадер, если данные загружаются */}
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        users={users}
        follow={follow}
        unfollow={unfollow}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
