import {
  REQUEST_FEEDBACKS,
  RECEIVE_FEEDBACKS,
  REQUEST_CREATE_FEEDBACK,
  RECIEVE_CREATE_FEEDBACK,
} from "./feedbackActionTypes";

import { getConfig } from "./authenticationActions";
import { getErrors } from "./errorsActions";
import { createMessage } from "./messageActions";

export const receiveFeedbacks = (feedbacks) => ({
  type: RECEIVE_FEEDBACKS,
  payload: feedbacks,
});

export const requestCreateFeedback = () => ({
  type: REQUEST_CREATE_FEEDBACK,
});

export const receiveCreateFeedback = (submissionSuccess) => ({
  type: RECIEVE_CREATE_FEEDBACK,
  payload: submissionSuccess,
});

export const getFeedbacks = () => (dispatch, getState) => {
  let status = null;
  const config = getConfig(getState);
  dispatch({ type: REQUEST_FEEDBACKS });
  fetch("api/feedbacks", config)
    .then((res) => {
      status = res.status;
      return res.json();
    })
    .then((data) => {
      data.length && dispatch(receiveFeedbacks(data));
    });
};

export const createFeedback = (feedbackDetails) => (dispatch) => {
  let status = null;
  dispatch(requestCreateFeedback());
  const body = JSON.stringify(feedbackDetails);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body,
  };
  fetch("api/feedbacks", config)
    .then((res) => {
      status = res.status;
      if (!res.ok) {
        throw res.text();
      } else {
        return res.text();
      }
    })
    .then((data) => {
      dispatch(
        createMessage({
          createdFeedback: "Successfully Created Feedback",
        })
      );
      dispatch(receiveCreateFeedback(data));
    })
    .catch((err) => {
      err.then((messages) => {
        dispatch(getErrors(messages, status));
      });
    });
};
