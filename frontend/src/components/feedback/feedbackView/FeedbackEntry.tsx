import React from "react";
import { Feedback } from "../types";

import "./FeedbackEntry.scss";

interface ComponentProps {
  feedback: Feedback;
}

const FeedbackEntry = (props: ComponentProps) => {
  const {
    feedback: { name, email, comments, num_stars },
  } = props;

  return (
    <div className="feedback-entry">
      <span className="feedback-entry__detail">Name: {name}</span>
      <span className="feedback-entry__detail">Email: {email}</span>
      <span className="feedback-entry__detail">Comments: {comments}</span>
      <span className="feedback-entry__detail">num_stars: {num_stars}</span>
    </div>
  );
};

export default FeedbackEntry;
