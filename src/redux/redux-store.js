import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import friendsReducer from "./friends-reducer";
import sidebarReducer from "./sidebar-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import settingsReducer from "./settings-reducer";


const store = configureStore({
    reducer: {
      profilePage: profileReducer,
      dialogsPage: dialogsReducer,      
      usersPage: UsersReducer,
      auth: authReducer,
      app: appReducer,
      friends: friendsReducer,
      sidebar: sidebarReducer,
      music: musicReducer,
      news: newsReducer,
      settings: settingsReducer,
        },
  });
  

export default store;

