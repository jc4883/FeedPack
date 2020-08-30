import {
  REQUEST_LEADS,
  RECEIVE_LEADS,
  REQUEST_LEAD,
  RECEIVE_LEAD,
  REQUEST_DELETE,
  RECEIVE_DELETE,
  REQUEST_CREATE,
  RECEIVE_CREATE,
} from "../actions/leadsActionTypes";

const initialState = {
  leads: [],
};

export const leads = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LEADS: {
      // TODO: add isFetchingLeads state to redux
      return state;
    }
    case RECEIVE_LEADS: {
      return {
        ...state,
        leads: action.payload,
      };
    }
    case REQUEST_LEAD: {
      // TODO: add isFetchingLead state to redux
      return state;
    }
    case RECEIVE_LEAD: {
      const { payload } = action;
      const { leads } = state;
      const found = leads.some((lead) => lead.id === action.id);
      if (!found) leads.push(payload);
      return {
        ...state,
        leads: state.leads,
      };
    }
    case REQUEST_DELETE: {
      // TODO: add isDeleting state to redux
      return state;
    }
    case RECEIVE_DELETE: {
      const { leads } = state;
      const nextLeads = leads.filter((lead) => lead.id !== action.id);
      return {
        ...state,
        leads: nextLeads,
      };
    }
    case REQUEST_CREATE: {
      // TODO: add isCreating state to redux
      return state;
    }
    case RECEIVE_CREATE: {
      const { leads } = state;
      const { payload } = action;
      const nextLeads = leads.concat([payload]);
      return {
        ...state,
        leads: nextLeads,
      };
    }
    default: {
      return state;
    }
  }
};
