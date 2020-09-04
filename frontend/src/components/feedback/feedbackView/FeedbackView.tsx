import React, { useEffect } from "react";
import { connect } from "react-redux";

import { MyReduxState } from "../../../redux/reducers/rootReducerType";

import { getFeedbacks } from "../../../redux/actions/feedbackActions";

import { Feedback } from "../types";

import FeedbackEntry from "./FeedbackEntry";

interface ComponentProps {
  getFeedbacks: () => void;
  feedbacks: Feedback[];
}

const FeedbackView = (props: ComponentProps) => {
  const { getFeedbacks, feedbacks } = props;

  useEffect(() => {
    getFeedbacks();
  }, [getFeedbacks]);

  return (
    <div>
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
