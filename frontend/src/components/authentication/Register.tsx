import React, { useState, SyntheticEvent } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const onChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case "username":
        setUsername(target.value);
      case "password":
        setPassword(target.value);
      case "email":
        setEmail(target.value);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          type="text"
          name="username"
          onChange={onChange}
        />
        <input value={email} type="text" name="email" onChange={onChange} />
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

export default Register;
