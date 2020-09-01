import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { loadUser } from "../redux/actions/authenticationActions";

import { store } from "../index";

import PrivateRoute from "./common/PrivateRoute";
import Alerts from "./layout/Alerts";
import Header from "./header/Header";
import Leads from "./leads/Leads";
import Register from "./authentication/Register";
import Login from "./authentication/Login";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [loadUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Leads} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Alerts />
    </div>
  );
};

export default App;
