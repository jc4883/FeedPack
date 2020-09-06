import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { loadUser } from "../redux/actions/authenticationActions";

import { store } from "../index";

import PrivateRoute from "./common/PrivateRoute";
import Alerts from "./layout/Alerts";
import Header from "./header/Header";
import Leads from "./leads/Leads";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import FeedbackView from "./feedback/feedbackView/FeedbackView";
import FeedbackForm from "./feedback/feedbackForm/FeedbackForm";
import FeedbackSuccess from "./feedback/feedbackSuccess/FeedbackSuccess";

import "./App.scss";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [loadUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path="/feedback_view" component={FeedbackView} />
        <PrivateRoute exact path="/leads" component={Leads} />
        <Route exact path="/feedback_success" component={FeedbackSuccess} />
        <Route exact path="/feedback_form/:user_id" component={FeedbackForm} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Alerts />
    </div>
  );
};

export default App;
