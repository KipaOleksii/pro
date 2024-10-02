import { usersAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA :
      return {
        ...state,
        ...action.data,
        isAuth: true, // if we have id, email and login, then user is authenticated
      }
    default:
      return state;
  };
}

export const setAuthUserData = (id, email,login) => ({ type: SET_USER_DATA, data: {id, email, login}});

export const getLoginData = () => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.getLogin();
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login)); // Вызываем экшен с полученными данными
      }
    } catch (error) {
      console.error("Error fetching login data:", error);
    }
  };
};

export default authReducer;
