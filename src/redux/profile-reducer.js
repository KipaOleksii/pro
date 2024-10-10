import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_ERROR = "SET_ERROR"; // Добавлено для обработки ошибок

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      avatar: "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
      likesCount: "15",
    },
    {
      id: 2,
      message: "It's my first post!",
      avatar: "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
      likesCount: "8",
    },
    {
      id: 3,
      message: "I love you",
      avatar: "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
      likesCount: "22",
    },
  ],
  profile: null,
  status: "",
  error: null, // Для хранения возможных ошибок
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.postText,
        avatar: "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_ERROR: // Для обработки ошибок
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setError = (error) => ({ type: SET_ERROR, error }); // Экшен для обработки ошибок

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.getProfile(userId || 31687); 
      dispatch(setUsersProfile(response.data)); 
    } catch (error) {
      dispatch(setError("Error fetching profile")); // Отправляем ошибку в стейт
    }
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.getStatus(userId || 31687); 
      dispatch(setStatus(response.data)); 
    } catch (error) {
      dispatch(setError("Error fetching status")); // Обрабатываем ошибку
    }
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.updateStatus(status); 
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status)); 
      }
    } catch (error) {
      dispatch(setError("Error updating status")); // Обрабатываем ошибку
    }
  };
};

export default profileReducer;
