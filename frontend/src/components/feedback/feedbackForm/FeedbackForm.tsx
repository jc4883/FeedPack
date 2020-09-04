import React, { useState, SyntheticEvent, Component } from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import { createFeedback } from "../../../redux/actions/feedbackActions";

interface FeedbackDetails {
  name: string | null;
  email: string | null;
  comments: string | null;
  num_stars: number;
  recipient: number;
}

interface ComponentProps {
  createFeedback: (feedbackDetails: FeedbackDetails) => void;
}

const FeedbackForm = (props: ComponentProps) => {
  const { createFeedback } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(0);
  const params: { user_id: string } = useParams();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) {
      // TODO: Dispatch createMessage or getErrors event
      return;
    }

    const { user_id } = params;
    const feedbackDetails: FeedbackDetails = {
      name: name || null,
      email: email || null,
      comments: comments || null,
      num_stars: rating,
      recipient: Number(user_id),
    };
    createFeedback(feedbackDetails);
  };

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case "name":
        setName(target.value);
        break;
      case "email":
        setEmail(target.value);
        break;
      case "feedback":
        setComments(target.value);
        break;
      case "rating":
        setRating(Number(target.value));
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <div>
        <label>Your name (optional):</label>
        <input value={name} onChange={handleChange} name="name" type="text" />
      </div>
      <div>
        <label>Your email (optional):</label>
        <input value={email} onChange={handleChange} name="email" type="text" />
      </div>
      <div>
        <label>feedback (optional):</label>
        <input
          value={comments}
          onChange={handleChange}
          name="feedback"
          type="text"
        />
      </div>
      <div>
        <label>rating:</label>
        <br />
        <input onChange={handleChange} type="radio" name="rating" value={1} />
        <label>1</label>
        <br />
        <input onChange={handleChange} type="radio" name="rating" value={2} />
        <label>2</label>
        <br />
        <input onChange={handleChange} type="radio" name="rating" value={3} />
        <label>3</label>
        <br />
        <input onChange={handleChange} type="radio" name="rating" value={4} />
        <label>4</label>
        <br />
        <input onChange={handleChange} type="radio" name="rating" value={5} />
        <label>5</label>
        <br />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default connect(null, { createFeedback })(FeedbackForm);
