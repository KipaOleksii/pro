import React from "react";
import style from "./ProfileInfo.module.css";

const Status = ({status, activateEditMode, deactivateEditMode, onStatusChange, editMode}) => {
  return (
    <div className={style.status}>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>Status: {status || "No status"}</span>
        </div>
      ) : (
        <div>
          <input
            autoFocus
            value={status}
            onChange={onStatusChange}
            onBlur={deactivateEditMode} 
          />
        </div>
      )}
    </div>
  );
};

export default Status;
