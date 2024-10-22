import React from "react";
import style from "./Users.module.css";
import userPhoto from "../img/1077114.png";
import { NavLink } from "react-router-dom";
import PaginationPage from "../Helpers/pagination/Pagination";

let Users = (props) => {
  return (
    <div className={style.block}>
      <PaginationPage
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {/* Отображение пользователей */}
      {props.users.map((u) => (
        <div key={u.id} className={style.user}>
          <div className={style.userLeft}>
            <NavLink to={"/profile/" + u.id}>
              <img
                className={style.photoImg}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="user"
              />
            </NavLink>
            <button
              disabled={props.followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                u.followed ? props.unfollowUser(u.id) : props.followUser(u.id);
              }}
            >
              {u.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className={style.userRight}>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>ID: {u.id}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
