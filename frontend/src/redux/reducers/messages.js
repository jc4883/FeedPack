import { CREATE_MESSAGE } from "../actions/messageActionTypes";

const initialState = {};

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
