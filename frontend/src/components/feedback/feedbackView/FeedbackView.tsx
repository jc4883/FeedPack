import React, { useEffect } from "react";
import { connect } from "react-redux";

import { MyReduxState } from "../../../redux/reducers/rootReducerType";

import { getFeedbacks } from "../../../redux/actions/feedbackActions";

import { Feedback } from "../types";

import FeedbackEntry from "./FeedbackEntry";

import "./FeedbackView.scss";

interface ComponentProps {
  getFeedbacks: () => void;
  feedbacks: Feedback[];
}

const FeedbackView = (props: ComponentProps) => {
  const { getFeedbacks, feedbacks } = props;

  useEffect(() => {
    getFeedbacks();
  }, [getFeedbacks]);

  const sortFeedbacks = (feedback: Feedback[]) => {
    const compare = (feedback1: Feedback, feedback2: Feedback) => {
      const date1 = new Date(feedback1.created_at);
      const date2 = new Date(feedback2.created_at);
      if (date1 > date2) {
        return -1;
      } else {
        return 1;
      }
    };
    feedback.sort(compare);
  };
  sortFeedbacks(feedbacks);

  return (
    <div className="feedback-view">
      {feedbacks.map((feedback: Feedback, i) => {
        return <FeedbackEntry feedback={feedback} key={i} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: MyReduxState) => ({
  feedbacks: state.feedbacks.feedbacks,
});

export default connect(mapStateToProps, { getFeedbacks })(FeedbackView);
