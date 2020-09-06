import React, { useState, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { store } from "../../../index";

import { MyReduxState } from "../../../redux/reducers/rootReducerType";
import { createFeedback } from "../../../redux/actions/feedbackActions";
import { createMessage } from "../../../redux/actions/messageActions";

import { CreateFeedbackDetails } from "../types";

import Spinner from "../../common/Spinner";

import "./FeedbackForm.scss";

interface ComponentProps {
  createFeedback: (feedbackDetails: CreateFeedbackDetails) => void;
  submittingFeedback: boolean;
  successfullySubmitted: boolean;
}

const FeedbackForm = (props: ComponentProps) => {
  const { createFeedback, submittingFeedback, successfullySubmitted } = props;

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(0);
  const params: { user_id: string } = useParams();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (rating < 1 || rating > 5 || !title) {
      store.dispatch(
        createMessage({ createdFeedbackError: "Failed to create feedback" })
      );
      return;
    }

    const { user_id } = params;
    const feedbackDetails: CreateFeedbackDetails = {
      title,
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
      case "title":
        setTitle(target.value);
        break;
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

  return successfullySubmitted ? (
    <Redirect to="/feedback_success" />
  ) : (
    <div className="feedback-form-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2 className="feedback-form__title">Submit Feedback</h2>
        <div className="feedback-form__field">
          <label>Title:</label>
          <input
            value={title}
            onChange={handleChange}
            name="title"
            type="text"
          />
        </div>
        <div className="feedback-form__field">
          <label>Your name (optional):</label>
          <input value={name} onChange={handleChange} name="name" type="text" />
        </div>
        <div className="feedback-form__field">
          <label>Your email (optional):</label>
          <input
            value={email}
            onChange={handleChange}
            name="email"
            type="text"
          />
        </div>
        <div className="feedback-form__field">
          <label>feedback (optional):</label>
          <textarea
            value={comments}
            onChange={handleChange}
            name="feedback"
            className="feedback-form__comments-textarea"
          />
        </div>
        <div className="feedback-form__rating">
          <label>rating:</label>
          <div className="feedback-form__rating-all-options">
            <div className="feedback-form__rating-option">
              <label>1</label>
              <input
                onChange={handleChange}
                type="radio"
                name="rating"
                value={1}
                className="feedback-form__rating-option__radio"
              />
            </div>

            <div className="feedback-form__rating-option">
              <label>2</label>
              <input
                onChange={handleChange}
                type="radio"
                name="rating"
                value={2}
                className="feedback-form__rating-option__radio"
              />
            </div>

            <div className="feedback-form__rating-option">
              <label>3</label>
              <input
                onChange={handleChange}
                type="radio"
                name="rating"
                value={3}
                className="feedback-form__rating-option__radio"
              />
            </div>

            <div className="feedback-form__rating-option">
              <label>4</label>
              <input
                onChange={handleChange}
                type="radio"
                name="rating"
                value={4}
                className="feedback-form__rating-option__radio"
              />
            </div>

            <div className="feedback-form__rating-option">
              <label>5</label>
              <input
                onChange={handleChange}
                type="radio"
                name="rating"
                value={5}
                className="feedback-form__rating-option__radio"
              />
            </div>
          </div>
        </div>

        <button disabled={submittingFeedback}>Submit</button>
        {submittingFeedback && (
          <Spinner
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0",
              opacity: ".4",
            }}
          />
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state: MyReduxState) => {
  const { submittingFeedback, successfullySubmitted } = state.feedbacks;
  return {
    submittingFeedback,
    successfullySubmitted,
  };
};

export default connect(mapStateToProps, { createFeedback })(FeedbackForm);
