import React, { useState, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { MyReduxState } from "../../redux/reducers/rootReducerType";

import { login } from "../../redux/actions/authenticationActions";

import Spinner from "../common/Spinner";

import "./Login.scss";

interface ComponentProps {
  login: (username: string, password: string) => void;
  isAuthenticated: boolean | null;
  isLoading: boolean;
}

const Login = (props: ComponentProps) => {
  const { login, isAuthenticated, isLoading } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    login(username, password);
  };

  const onChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case "username":
        setUsername(target.value);
        break;
      case "password":
        setPassword(target.value);
        break;
    }
  };

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div className="login">
      <h1 className="login__header">Login</h1>
      <form className="login__form" onSubmit={onSubmit}>
        <div className="login__field">
          <span>Username</span>
          <input
            value={username}
            type="text"
            name="username"
            onChange={onChange}
          />
        </div>
        <div className="login__field">
          <span>Password</span>
          <input
            value={password}
            type="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button disabled={isLoading} className="login__submit">
          Login
        </button>
        {isLoading && <Spinner className="login-spinner" />}
      </form>
    </div>
  );
};

const mapStateToProps = (state: MyReduxState) => {
  const { isAuthenticated, isLoading } = state.authentication;
  return {
    isAuthenticated,
    isLoading,
  };
};

export default connect(mapStateToProps, { login })(Login);
