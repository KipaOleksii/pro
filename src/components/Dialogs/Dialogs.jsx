import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = ({ dialogsPage, onSendMessageClick, onNewMessageChange, isAuth }) => {
  const dialogsElements = dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />
  ));

  const messagesElements = dialogsPage.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  const newMessageBody = dialogsPage.newMessageBody;

  const handleNewMessageChange = (e) => {
    onNewMessageChange(e.target.value);
  };
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
      <div className={style.text}>
        <div>
          <textarea 
            value={newMessageBody} 
            onChange={handleNewMessageChange} 
            placeholder="Enter your text"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
