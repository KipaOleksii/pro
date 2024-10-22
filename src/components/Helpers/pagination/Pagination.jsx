import React from "react";
import style from "./Pagination.module.css";

const PaginationPage = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  const portionSize = 10;
  const currentPortion = Math.floor((currentPage - 1) / portionSize) + 1;
  const totalPortions = Math.ceil(pageCount / portionSize);

  const startPage = (currentPortion - 1) * portionSize + 1;
  const endPage = Math.min(currentPortion * portionSize, pageCount);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={style.pagination}>
      {currentPortion > 1 && (
        <>
          <button onClick={() => onPageChanged(1)}>First</button>
          <button onClick={() => onPageChanged(startPage - portionSize)}>Prev</button>
        </>
      )}

      {/* Отображение номеров страниц */}
      {pages.map((p) => (
        <span
          key={p}
          className={currentPage === p ? style.selectedPage : style.pageNumber}
          onClick={() => onPageChanged(p)}
          style={{ cursor: "pointer" }}
        >
          {p}
        </span>
      ))}

      {currentPortion < totalPortions && (
        <>
          <button onClick={() => onPageChanged(endPage + 1)}>Next</button>
          <button onClick={() => onPageChanged(pageCount)}>Last</button>
        </>
      )}

      {/* Текущая страница и общее количество страниц */}
      <div className={style.pageInfo}>
        Page {currentPage} of {pageCount}
      </div>
    </div>
  );
};

export default PaginationPage;
