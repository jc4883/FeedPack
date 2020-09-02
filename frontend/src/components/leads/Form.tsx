import React, { SyntheticEvent, useState } from "react";

import "./Form.scss";

interface ProvidedProps {
  handleSubmit: (data: {
    email: string;
    name: string;
    message: string;
  }) => void;
}

const Form = (props: ProvidedProps) => {
  const { handleSubmit: providedHandleSubmit } = props;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    providedHandleSubmit({ email, name, message });
    setEmail("");
    setName("");
    setMessage("");
  };

  const handleChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    switch (input.name) {
      case "email":
        setEmail(input.value);
        break;
      case "name":
        setName(input.value);
        break;
      case "message":
        setMessage(input.value);
        break;
      default:
    }
  };

  return (
    <form className="leads-form" onSubmit={handleSubmit}>
      <h2>New Lead</h2>
      <div className="leads-form__field">
        <label>email</label>
        <input value={email} onChange={handleChange} name="email" type="text" />
      </div>
      <div className="leads-form__field">
        <label>name</label>
        <input value={name} onChange={handleChange} name="name" type="text" />
      </div>
      <div className="leads-form__field">
        <label>message</label>
        <input
          value={message}
          onChange={handleChange}
          name="message"
          type="text"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
