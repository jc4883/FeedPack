import { Lead } from "../../components/leads/types";
import { Feedback } from "../../components/feedback/types";

export interface MyReduxState {
  messages: {
    createdLead?: string;
    deletedLead?: string;
    createdFeedback?: string;
    createdFeedbackError?: string;
  };
  errors: {
    messages: {
      email?: string[];
      name?: string[];
      message?: string[];
      non_field_errors?: string[];
    };
    status: number;
  };
  leads: {
    leads: Lead[];
  };
  feedbacks: {
    feedbacks: Feedback[];
    submittingFeedback: boolean;
    successfullySubmitted: boolean;
    submittedFeedback: Feedback;
  };
  authentication: {
    token: string;
    isAuthenticated: boolean | null;
    isLoading: boolean;
    user: null | {
      username: string;
      email: string;
    };
  };
}
