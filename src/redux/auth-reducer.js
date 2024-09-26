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

export default authReducer;
