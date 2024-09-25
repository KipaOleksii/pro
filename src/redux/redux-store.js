import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import UsersReducer from "./users-reducer";

const store = configureStore({
    reducer: {
      profilePage: profileReducer,
      dialogsPage: dialogsReducer,      
      usersPage: UsersReducer,
    },
  });
  

export default store;

