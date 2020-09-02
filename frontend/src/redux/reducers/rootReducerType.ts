import { Lead } from "../../components/leads/types";

export interface MyReduxState {
  messages: {
    createdLead?: string;
    deletedLead?: string;
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
