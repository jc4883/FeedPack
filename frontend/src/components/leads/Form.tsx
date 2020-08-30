import React, { SyntheticEvent, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>email</label>
      <input value={email} onChange={handleChange} name="email" type="text" />
      <br />
      <label>name</label>
      <input value={name} onChange={handleChange} name="name" type="text" />
      <br />
      <label>message</label>
      <input
        value={message}
        onChange={handleChange}
        name="message"
        type="text"
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
