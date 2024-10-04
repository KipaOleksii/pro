import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";


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
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        avatar:
        "https://steamuserimages-a.akamaihd.net/ugc/1684893251099728454/0A7D01E4E4806DD7BBD46E63747555D4F861BFD6/",
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
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
    default:
      return state;
  };
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.getProfile(userId || 11); // Используем 11, если userId не передан
      dispatch(setUsersProfile(response.data)); // Диспатчим полученные данные профиля
    } catch (error) {
      console.error("Error fetching profile:", error); // Ловим ошибки, если они возникли
    }
  };
};
export const getStatus = (userId) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.getStatus(userId || 11); // Используем 11, если userId не передан
      dispatch(setStatus(response.data)); // Диспатчим полученный статус
    } catch (error) {
      console.error("Error fetching status:", error); // ��овим ошибки, если они возникли
    }
  }
}


export default profileReducer;
