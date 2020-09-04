import React from "react";
import { Feedback } from "../types";

interface ComponentProps {
  feedback: Feedback;
}

const FeedbackEntry = (props: ComponentProps) => {
  const {
    feedback: { name, email, comments, num_stars },
  } = props;

  return (
    <div>
      <span>Name: {name}</span>
      <span>Email: {email}</span>
      <span>Comments: {comments}</span>
      <span>num_stars: {num_stars}</span>
    </div>
  );
};

export default FeedbackEntry;
