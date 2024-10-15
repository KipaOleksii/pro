import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";


const store = configureStore({
    reducer: {
      profilePage: profileReducer,
      dialogsPage: dialogsReducer,      
      usersPage: UsersReducer,
      auth: authReducer,
      app: appReducer,
    },
  });
  

export default store;

