import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_PAGE = 'SET_TOTAL_COUNT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE_IN_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_COUNT_PAGE:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IN_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

// Action creators
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT_PAGE, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IN_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

// Thunks
export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true)); // Устанавливаем флаг загрузки
    try {
      const response = await usersAPI.getUsersPage(currentPage, pageSize); // Получаем пользователей
      dispatch(toggleIsFetching(false)); // Убираем флаг загрузки
      dispatch(setUsers(response.items)); // Устанавливаем пользователей
      dispatch(setTotalUsersCount(response.totalCount)); // Устанавливаем общее количество пользователей
    } catch (error) {
      console.error("Ошибка при загрузке пользователей:", error);
      dispatch(toggleIsFetching(false)); // Останавливаем загрузку в случае ошибки
    }
  };
};

export const getPages = (pageNumber, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(pageNumber)); // Устанавливаем текущую страницу
    dispatch(toggleIsFetching(true)); // Устанавливаем флаг загрузки
    try {
      const response = await usersAPI.getUsersPage(pageNumber, pageSize); // Загружаем данные для новой страницы
      dispatch(toggleIsFetching(false)); // Убираем флаг загрузки
      dispatch(setUsers(response.items)); // Устанавливаем пользователей для новой страницы
    } catch (error) {
      console.error("Ошибка при смене страницы:", error);
      dispatch(toggleIsFetching(false)); // Останавливаем загрузку в случае ошибки
    }
  };
};

const handleFollowUnfollow = async (dispatch, apiMethod, actionCreator, userId) => {
    dispatch(toggleFollowingInProgress(true, userId)); // Устанавливаем флаг загрузки для текущего пользователя
    try {
      const response = await apiMethod(userId); // Вызываем API метод (follow или unfollow)
      if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId)); // Если успех, выполняем соответствующее действие (follow/unfollow)
      }
    } catch (error) {
      console.error(`Ошибка при выполнении операции:`, error); // Ловим и логируем ошибку
    } finally {
      dispatch(toggleFollowingInProgress(false, userId)); // В любом случае снимаем флаг загрузки
    }
  };
  
  export const followUser = (userId) => {
    return async (dispatch) => {
      await handleFollowUnfollow(dispatch, usersAPI.followUser, follow, userId);
    };
  };
  
  export const unfollowUser = (userId) => {
    return async (dispatch) => {
      await handleFollowUnfollow(dispatch, usersAPI.unfollowUser, unfollow, userId);
    };
  };
  
export default UsersReducer;
