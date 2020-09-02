import React, { useState, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { MyReduxState } from "../../redux/reducers/rootReducerType";

import { register } from "../../redux/actions/authenticationActions";

interface ComponentProps {
  register: (details: {
    username: string;
    password: string;
    email: string;
  }) => void;
  isAuthenticated: boolean | null;
}

const Register = (props: ComponentProps) => {
  const { register, isAuthenticated } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    register({ username, password, email });
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
      case "email":
        setEmail(target.value);
        break;
    }
  };

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <span>Username</span>
        <input
          value={username}
          type="text"
          name="username"
          onChange={onChange}
        />
        <span>Email</span>
        <input value={email} type="text" name="email" onChange={onChange} />
        <span>Password</span>
        <input
          value={password}
          type="text"
          name="password"
          onChange={onChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: MyReduxState) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
