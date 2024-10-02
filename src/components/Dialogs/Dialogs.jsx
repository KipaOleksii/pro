import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = () => {
  const dispatch = useDispatch();
  const dialogsPage = useSelector((state) => state.dialogsPage);

  const dialogsElements = dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />
  ));

  const messagesElements = dialogsPage.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  const newMessageBody = dialogsPage.newMessageBody;

  const onSendMessageClick = () => {
    dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    dispatch(updateNewMessageBodyCreator(body));
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
            onChange={onNewMessageChange} 
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
