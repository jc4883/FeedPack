import {
  REQUEST_FEEDBACKS,
  RECEIVE_FEEDBACKS,
  REQUEST_CREATE_FEEDBACK,
  RECIEVE_CREATE_FEEDBACK,
} from "../actions/feedbackActionTypes";

const initial_state = {
  feedbacks: [],
  feedbackSubmitSuccess: false,
};

export const feedbacks = (state = initial_state, action) => {
  switch (action.type) {
    case REQUEST_FEEDBACKS: {
      return state;
    }
    case RECEIVE_FEEDBACKS: {
      return {
        ...state,
        feedbacks: action.payload,
      };
    }
    case REQUEST_CREATE_FEEDBACK: {
      return {
        ...state,
        feedbackSubmitSuccess: false,
      };
    }
    case RECIEVE_CREATE_FEEDBACK: {
      return {
        ...state,
        feedbackSubmitSuccess: true,
      };
    }
    default: {
      return state;
    }
  }
};
