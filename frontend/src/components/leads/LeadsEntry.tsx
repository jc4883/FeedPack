import React from "react";

import "./LeadsEntry.scss";

interface ComponentProps {
  name: string;
  email: string;
  message: string;
  handleDelete: () => void;
}

const LeadsEntry = (props: ComponentProps) => {
  const { name, email, message, handleDelete } = props;
  return (
    <div className="leads-entry">
      <div className="leads-entry__field">name: {name}</div>
      <div className="leads-entry__field">email: {email}</div>
      <div className="leads-entry__field">message: {message}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default LeadsEntry;
