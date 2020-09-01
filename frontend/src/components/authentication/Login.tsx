import React, { useState, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { MyReduxState } from "../../redux/reducers/rootReducerType";

import { login } from "../../redux/actions/authenticationActions";

interface ComponentProps {
  login: (username: string, password: string) => void;
  isAuthenticated: boolean | null;
}

const Login = (props: ComponentProps) => {
  const { login, isAuthenticated } = props;
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
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          type="text"
          name="username"
          onChange={onChange}
        />
        <input
          value={password}
          type="text"
          name="password"
          onChange={onChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: MyReduxState) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
