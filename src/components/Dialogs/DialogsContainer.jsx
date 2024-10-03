import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    },
    onNewMessageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect) (Dialogs);
