import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const ERROR_MESSAGE = "ERROR_MESSAGE";
const UPDATE_PHOTO = "UPDATE_PHOTO";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      avatar:
        "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
      likesCount: "15",
    },
    {
      id: 2,
      message: "It's my first post!",
      avatar:
        "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
      likesCount: "8",
    },
    {
      id: 3,
      message: "I love you",
      avatar:
        "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
      likesCount: "22",
    },
  ],
  profile: null,
  status: "",
  errorMessage: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.postText,
        avatar:
          "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
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
        errorMessage: '',
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
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case UPDATE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setUpdateStatus = (status) => ({ type: UPDATE_STATUS, status });

export const errorMessage = (errorMessage) => ({ type: ERROR_MESSAGE, errorMessage });

export const updatePhoto = (photos) => ({ type: UPDATE_PHOTO, photos });

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.getProfile(userId);
      dispatch(setUsersProfile(response.data));
    } catch (error) {
      dispatch(errorMessage("Error fetching profile")); 
    }
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.getStatus(userId);
      dispatch(setStatus(response.data));
    } catch (error) {
      dispatch(errorMessage("Error fetching status")); 
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
      dispatch(errorMessage("Error updating status"));
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
      dispatch(errorMessage("Error saving photo"));
    }
  };
};
export const saveUserData = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id
    try {
      const response = await usersAPI.saveUserData(profile);
      if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId)); 
      } else {
        const errorServerMessage = response.data.messages[0];
        dispatch(errorMessage(errorServerMessage));
      }
    } catch (error) {
      dispatch(errorMessage("Error saving user data"));
    }
  };
};


export default profileReducer;
