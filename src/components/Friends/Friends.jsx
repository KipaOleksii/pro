import React from "react";
import s from "./Friends.module.css";
import BackgroundLetterAvatars from "./BackGroundLetterAvatars";
import { Avatar } from "@mui/material";

const Friends = () => {
  return (
    <div>
      <div className={s.friends}>Friends list:</div>
      <div>
        <BackgroundLetterAvatars/>
      </div>
    </div>
      
  );
};
export default Friends;
