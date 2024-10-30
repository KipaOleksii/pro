import { usersAPI } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  loginError: '',
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        loginError: '',
      };
      case GET_CAPTCHA_URL:
        return {
         ...state,
          captchaUrl: action.captchaUrl,
        };
      case SET_LOGIN_ERROR:
        return {
         ...state,
          loginError: action.error,
        };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

export const getCaptchaUrlSubmit = (captchaUrl) => ({
  type: GET_CAPTCHA_URL,
  captchaUrl,
});

export const setLoginError = (error) => ({
  type: SET_LOGIN_ERROR,
  error,
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

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  try {
    const response = await usersAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getLoginData());
    } else {
      if (response.data.resultCode === 10) 
      dispatch(getCaptchaUrl());
      const errorMessage = response.data.messages[0] || "Ошибка входа";
      dispatch(setLoginError(errorMessage)); // Устанавливаем ошибку }
      }}
      catch (error) {
    dispatch(setLoginError(error.message || "Произошла ошибка. Попробуйте позже."));
  }
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

export const getCaptchaUrl = () => {
return async (dispatch) => {
  try {
    const response = await usersAPI.getCaptcha();
    dispatch(getCaptchaUrlSubmit(response.data.url));
  } catch (error) {
    console.error("Error fetching captcha URL:", error);
  }
}
}



export default authReducer;
