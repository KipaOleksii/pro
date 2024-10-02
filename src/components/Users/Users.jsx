import React from "react";
import style from "./Users.module.css";
import userPhoto from "../img/1077114.png";
import { NavLink } from "react-router-dom";

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

 // Функция для обработки Follow/Unfollow
const handleFollowUnfollow = async (u) => {
  props.toggleFollowingInProgress(true, u.id); // Устанавливаем флаг загрузки

  try {
    if (u.followed) {
      await props.unfollowUser(u.id); // Отписываемся от пользователя
    } else {
      await props.followUser(u.id); // Подписываемся на пользователя
    }
  } catch (error) {
    console.error("Error while following/unfollowing:", error);
  } finally {
    props.toggleFollowingInProgress(false, u.id); // Снимаем флаг загрузки
  }
};


  return (
    <div className={style.block}>
      {/* Пагинация */}
      <div className={style.pagination}>
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
            className={props.currentPage === p ? style.selectedPage : style.pageNumber}
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
        <div className={style.pageInfo}>
          Page {props.currentPage} of {pageCount}
        </div>
      </div>

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
  onClick={() => handleFollowUnfollow(u)}
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
