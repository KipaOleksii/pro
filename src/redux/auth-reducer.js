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
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

export const getLoginData = () => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.getLogin();
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true)); // Вызываем экшен с полученными данными
      }
    } catch (error) {
      console.error("Error fetching login data:", error);
    }
  };
};
export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.login(email, password, rememberMe);
      if (response.data.resultCode === 0) {
        dispatch(getLoginData());
      } else {
        throw new Error(response.data.messages[0] || "Ошибка входа");
      }
    } catch (error) {
      console.error("Ошибка при входе:", error);
      throw error;
    }
  };
};


export const logout = () => {
  return async (dispatch) => {
    try {
      const response = await usersAPI.logout();
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
};

export default authReducer;
