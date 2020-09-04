import { combineReducers } from "redux";
import { leads } from "./leads";
import { errors } from "./errors";
import { messages } from "./messages";
import { authentication } from "./authentication";
import { feedbacks } from "./feedbacks";

export default combineReducers({
  messages,
  errors,
  leads,
  authentication,
  feedbacks,
});
