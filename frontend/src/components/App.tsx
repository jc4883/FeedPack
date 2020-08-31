import React from "react";
import { Route, Switch } from "react-router-dom";

import Alerts from "./layout/Alerts";
import Header from "./header/Header";
import Leads from "./leads/Leads";
import Register from "./authentication/Register";
import Login from "./authentication/Login";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Leads} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Alerts />
    </div>
  );
};

export default App;
