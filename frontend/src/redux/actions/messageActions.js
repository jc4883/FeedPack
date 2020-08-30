import { CREATE_MESSAGE } from "./messageActionTypes";

export const createMessage = (payload) => ({
  type: CREATE_MESSAGE,
  payload,
});
