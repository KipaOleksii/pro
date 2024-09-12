import React from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>
        <img src={props.avatar} alt={props.name} className={s.avatar} />
        {props.name}</NavLink>
    </div>
  );
};
export default DialogItem;
 