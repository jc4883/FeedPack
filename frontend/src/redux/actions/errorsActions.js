import { GET_ERRORS } from "./errorsActionTypes";

export const getErrors = (errors, status) => ({
  type: GET_ERRORS,
  msg: errors,
  status,
});
