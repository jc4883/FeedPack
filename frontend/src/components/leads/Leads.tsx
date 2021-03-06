import React, { useEffect } from "react";
import { connect } from "react-redux";

import { MyReduxState } from "../../redux/reducers/rootReducerType";

import {
  getLeads,
  deleteLead,
  createLead,
} from "../../redux/actions/leadsActions";

import Form from "./Form";
import LeadsEntry from "./LeadsEntry";

import "./Leads.scss";

interface ReduxProps {
  leads: any[];
  getLeads: () => void;
  deleteLead: (id: number) => void;
  createLead: (data: { email: string; name: string; message: string }) => void;
}

const Leads = (props: ReduxProps) => {
  const { leads, getLeads, deleteLead, createLead } = props;

  useEffect(() => {
    getLeads();
  }, []);

  return (
    <div className="leads">
      <Form handleSubmit={createLead} />
      <div className="leads-entries">
        {leads.map((lead, i) => {
          const { id, email, message, name } = lead;
          return (
            <LeadsEntry
              key={i}
              name={name}
              email={email}
              message={message}
              handleDelete={() => deleteLead(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: MyReduxState) => {
  const { leads } = state.leads;
  return { leads };
};

export default connect(mapStateToProps, {
  getLeads,
  deleteLead,
  createLead,
})(Leads);
