import React, { useEffect } from "react";
import { connect } from "react-redux";

import { withAlert, AlertManager } from "react-alert";

import { MyReduxState } from "../../redux/reducers/rootReducerType";

interface ComponentProps {
  alert: AlertManager;
  errors: {
    email?: string;
    name?: string;
    message?: string;
  };
  messages: {
    createdLead?: string;
    deletedLead?: string;
  };
}

const Alerts = ({ alert, errors, messages }: ComponentProps) => {
  const { email, name, message: errorMessage } = errors;
  const { createdLead, deletedLead } = messages;

  useEffect(() => {
    email && alert.error("Email: " + email);
    name && alert.error("Name: " + name);
    errorMessage && alert.error("Message: " + errorMessage);
  }, [errors]);

  useEffect(() => {
    createdLead && alert.success(createdLead);
    deletedLead && alert.success(deletedLead);
  }, [messages]);

  return <React.Fragment>I am alerts.</React.Fragment>;
};

const mapStateToProps = (state: MyReduxState) => {
  const { messages: errorMessages } = state.errors;
  const { messages } = state;
  return {
    errors: errorMessages,
    messages,
  };
};

export default connect(mapStateToProps)(withAlert()(Alerts));
