import { GET_ERRORS } from "../actions/errorsActionTypes";

const initialState = {
  messages: {},
  status: null,
};

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS: {
      const { msg: messages, status } = action;
      return {
        ...state,
        messages,
        status,
      };
    }
    default: {
      return state;
    }
  }
};

// TODO: update MyReduxState type
