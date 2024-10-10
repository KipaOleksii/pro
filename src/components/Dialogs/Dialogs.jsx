import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, Form, Formik } from "formik";

const Dialogs = ({ dialogsPage, onSendMessageClick }) => {
  const dialogsElements = dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />
  ));

  const messagesElements = dialogsPage.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  const initialValues = {
    messageText: '', 
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values.messageText);
    onSendMessageClick(values.messageText);  // Вызываем функцию для отправки сообщения
    resetForm();  // Очищаем форму после отправки
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
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div>
              <Field
                component="textarea" 
                id="messageText"
                name="messageText"
                placeholder="Enter your message text"
                className={style.textarea}
              />
            </div>
            <button type="submit" className={style.submitButton}>Send</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Dialogs;
