import React, { useState, SyntheticEvent } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submit login form!");
  };

  const onChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case "username":
        setUsername(target.value);
      case "password":
        setPassword(target.value);
    }
  };

  return (
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

export default Login;
