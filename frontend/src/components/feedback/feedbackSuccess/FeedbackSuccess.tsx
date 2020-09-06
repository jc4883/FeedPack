import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { MyReduxState } from "../../../redux/reducers/rootReducerType";
import { Feedback } from "../types";

interface ComponentProps {
  submittedFeedback: Feedback;
}

const FeedbackSuccess = (props: ComponentProps) => {
  const { submittedFeedback } = props;

  if (submittedFeedback) {
    const { title, name, email, comments, num_stars } = submittedFeedback;
    return (
      <div>
        <div>Successfully Submitted!</div>
        <div>Title: {title}</div>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Comments: {comments}</div>
        <div>Number of Stars: {num_stars}</div>
      </div>
    );
  }

  return <Redirect to="/feedback" />;
};

const mapStateToProps = (state: MyReduxState) => ({
  submittedFeedback: state.feedbacks.submittedFeedback,
});

export default connect(mapStateToProps)(FeedbackSuccess);
