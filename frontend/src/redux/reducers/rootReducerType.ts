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
    };
    status: number;
  };
  leads: {
    leads: Lead[];
  };
}
