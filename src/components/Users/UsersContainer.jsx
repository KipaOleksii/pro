import React, { useEffect } from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

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
        const response = await usersAPI.getUsersPage(currentPage, pageSize); // Получаем пользователей
        toggleIsFetching(false); // Убираем флаг загрузки
        setUsers(response.items); // Устанавливаем пользователей
        setTotalUsersCount(response.totalCount); // Устанавливаем общее количество пользователей
      } catch (error) {
        console.error("Ошибка при загрузке пользователей:", error);
        toggleIsFetching(false); // Останавливаем загрузку в случае ошибки
      }
    };
    fetchUsers(); // Вызываем функцию загрузки пользователей
  }, [currentPage, pageSize, setUsers, setTotalUsersCount, toggleIsFetching]); // Зависимости

  const onPageChanged = async (pageNumber) => {
    setCurrentPage(pageNumber); // Устанавливаем текущую страницу
    toggleIsFetching(true); // Устанавливаем флаг загрузки
    try {
      const response = await usersAPI.getUsersPage(pageNumber, pageSize); // Загружаем данные для новой страницы
      toggleIsFetching(false); // Убираем флаг загрузки
      setUsers(response.items); // Устанавливаем пользователей для новой страницы
    } catch (error) {
      console.error("Ошибка при смене страницы:", error);
      toggleIsFetching(false); // Останавливаем загрузку в случае ошибки
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
