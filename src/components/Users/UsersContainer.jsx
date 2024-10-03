import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
  getUsers,
  getPages,
  followUser,
  unfollowUser,
} from "../../redux/users-reducer";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const UsersContainer = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  isFetching,
  follow,
  unfollow,
  toggleFollowingInProgress,
  followingInProgress,
  getUsers, 
  getPages,
  followUser,
  unfollowUser,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize); // Диспатчим getUsers через props
  }, [currentPage, pageSize, getUsers]);

  const onPageChanged = (pageNumber) => {
    getPages(pageNumber, pageSize); // Диспатчим getPages через props
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
        toggleFollowingInProgress={toggleFollowingInProgress}
        followingInProgress={followingInProgress}
        followUser={followUser}
        unfollowUser={unfollowUser} 
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose ( connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
  getUsers,
  getPages,
  followUser,
  unfollowUser,  
}), withAuthRedirect) (UsersContainer);
