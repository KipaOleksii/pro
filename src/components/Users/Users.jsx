import React from "react";
import s from "./Users.module.css";
import userPhoto from "../img/1077114.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  const portionSize = 5;
  const currentPortion = Math.floor((props.currentPage - 1) / portionSize) + 1;
  const totalPortions = Math.ceil(pageCount / portionSize);

  const startPage = (currentPortion - 1) * portionSize + 1;
  const endPage = Math.min(currentPortion * portionSize, pageCount);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={s.block}>
      {/* Пагинация */}
      <div className={s.pagination}>
        {currentPortion > 1 && (
          <>
            <button onClick={() => props.onPageChanged(1)}>First</button>
            <button onClick={() => props.onPageChanged(startPage - portionSize)}>
              Prev
            </button>
          </>
        )}

        {/* Отображение номеров страниц */}
        {pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? s.selectedPage : s.pageNumber}
            onClick={() => props.onPageChanged(p)}
            style={{ cursor: "pointer" }}
          >
            {p}
          </span>
        ))}

        {currentPortion < totalPortions && (
          <>
            <button onClick={() => props.onPageChanged(endPage + 1)}>Next</button>
            <button onClick={() => props.onPageChanged(pageCount)}>Last</button>
          </>
        )}

        {/* Текущая страница и общее количество страниц */}
        <div className={s.pageInfo}>
          Page {props.currentPage} of {pageCount}
        </div>
      </div>

      {/* Отображение пользователей */}
      {props.users.map((u) => (
        <div key={u.id} className={s.user}>
          <div className={s.userLeft}>
            <NavLink to={"/profile/" + u.id}>
              <img
                className={s.photoImg}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="user"
              />
            </NavLink>
            <button
              onClick={() => {
                if (u.followed) {
                  axios
                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: { "API-KEY": "33ba9bdb-d8ce-48bd-8d69-b85f027410d6" },
                    })
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                } else {
                  axios
                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: { "API-KEY": "33ba9bdb-d8ce-48bd-8d69-b85f027410d6" },
                    })
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                }
              }}
            >
              {u.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className={s.userRight}>
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
