import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import style from "./Dialogs.module.css";


const DialogForm = (props) => {

    const initialValues = {
        messageText: '', 
      };
    
      const validationSchema = Yup.object({
        messageText:
         Yup.string()
          .min(3, 'Message must be at least 3 character long')
          .max(100, 'Message must be less than 100 characters')
          .required('Message is required'),
      })

      const onSubmit = (values, { resetForm }) => {
        console.log(values.messageText);
        props.onSendMessageClick(values.messageText);  // Вызываем функцию для отправки сообщения
        resetForm();  // Очищаем форму после отправки
      };

return (
    <>
     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div>
              <Field
                component='textarea'
                id='messageText'
                name='messageText'
                placeholder='Enter your message text'
                className={style.textarea}
              />
              <ErrorMessage
                name='messageText'
                component='div'
                className={style.errorMessage}
              />
            </div>
            <button type="submit" className={style.submitButton}>Send</button>
          </Form>
        </Formik>
    </>
)
}

export default DialogForm;