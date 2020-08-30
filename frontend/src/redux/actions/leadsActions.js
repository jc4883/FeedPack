import {
  REQUEST_LEADS,
  RECEIVE_LEADS,
  REQUEST_LEAD,
  RECEIVE_LEAD,
  REQUEST_DELETE,
  RECEIVE_DELETE,
  REQUEST_CREATE,
  RECEIVE_CREATE,
} from "./leadsActionTypes";

import { getErrors } from "./errorsActions";
import { createMessage } from "./messageActions";

export const requestLeads = () => ({
  type: REQUEST_LEADS,
});

export const receiveLeads = (payload) => ({
  type: RECEIVE_LEADS,
  payload,
});

export const requestLead = (id) => ({
  type: REQUEST_LEAD,
  id,
});

export const receiveLead = (payload) => ({
  type: RECEIVE_LEAD,
  payload,
});

export const requestDelete = (id) => ({
  type: REQUEST_DELETE,
  id,
});

export const receiveDelete = (id) => ({
  type: RECEIVE_DELETE,
  id,
});

export const requestCreate = (payload) => ({
  type: REQUEST_CREATE,
  payload,
});

export const receiveCreate = (payload) => ({
  type: RECEIVE_CREATE,
  payload,
});

// Thunk action creators
export const getLeads = () => (dispatch) => {
  dispatch(requestLeads());
  fetch("api/lead")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(receiveLeads(data));
    });
};

export const getLead = (id) => (dispatch) => {
  dispatch(requestLead(id));
  fetch(`api/lead/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch(receiveLead(data)));
};

export const deleteLead = (id) => (dispatch) => {
  dispatch(requestDelete(id));
  fetch(`api/lead/${id}`, {
    method: "DELETE",
  }).then(() => {
    dispatch(
      createMessage({
        deletedLead: "Successfully Deleted Lead",
      })
    );
    dispatch(receiveDelete(id));
  });
};

export const createLead = (data) => (dispatch) => {
  let status = null;
  dispatch(requestCreate(data));
  fetch("api/lead/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      status = res.status;
      if (!res.ok) {
        throw res.json();
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log("success");
      dispatch(
        createMessage({
          createdLead: "Successfully Created Lead",
        })
      );
      dispatch(receiveCreate(data));
    })
    .catch((err) => {
      console.log("fail");
      err.then((messages) => {
        console.log("fail2");
        dispatch(getErrors(messages, status));
      });
    });
};
