import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const SET_ERROR = "SET_ERROR";
const UPDATE_PHOTO = "UPDATE_PHOTO";

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
      avatar: "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",likesCount: "22",
    },
  ],
  profile: null,
  status: "",
  error: null, 
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
      case UPDATE_STATUS:
        return {
         ...state,
          status: action.status,
        };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
      case UPDATE_PHOTO:
        return {
         ...state,
          profile: {...state.profile, photos: action.photos},
        };
    default:
      return state;
  }
};

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setUpdateStatus = (status) => ({ type: UPDATE_STATUS, status});

export const setError = (error) => ({ type: SET_ERROR, error });

export const updatePhoto = (photos) => ({ type: UPDATE_PHOTO, photos });

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
      const response = await usersAPI.getUpdateStatus(status); 
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status)); 
      }
    } catch (error) {
      dispatch(setError("Error updating status")); // Обрабатываем ошибку
    }
  };
};

export const savePhoto = (photoFile) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.savePhoto(photoFile); 
      if (response.data.resultCode === 0) {
        dispatch(updatePhoto(response.data.data.photos));
      }
    } catch (error) {
      dispatch(setError("Error saving photo")); //  Обрабатываем ошибку
    }
  };
}

export default profileReducer;
