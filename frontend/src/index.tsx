import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import { Provider as AlertProvider, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import App from "./components/App";

export const store = configureStore();

const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <App />
        </Router>
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
