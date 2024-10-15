import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogForm from "./dialogForm";

const Dialogs = ({ dialogsPage, onSendMessageClick }) => {
  const dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />
  ));

  const messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogPanel}>
        <div className={style.dialogItems}>{dialogsElements}</div>
        <div className={style.text}>
          <DialogForm onSendMessageClick={onSendMessageClick} />
        </div>
      </div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
