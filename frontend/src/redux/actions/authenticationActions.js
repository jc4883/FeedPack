import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./authenticationActionTypes";

import { getErrors } from "./errorsActions";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const config = getConfig(getState);

  let status = null;
  fetch("/api/auth/user", config)
    .then((res) => {
      status = res.status;
      if (!res.ok) {
        throw res.json();
      } else {
        return res.json();
      }
    })
    .then((data) => {
      dispatch({
        type: USER_LOADED,
        payload: data,
      });
    })
    .catch((err) => {
      err.then((messages) => {
        dispatch(getErrors(messages, status));
        dispatch({
          type: AUTH_ERROR,
        });
      });
    });
};

export const login = (username, password) => (dispatch) => {
  const config = {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  let status = null;
  fetch("/api/auth/login", config)
    .then((res) => {
      status = res.status;
      if (!res.ok) {
        throw res.json();
      } else {
        return res.json();
      }
    })
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      err.then((messages) => {
        dispatch(getErrors(messages, status));
        dispatch({
          type: LOGIN_FAIL,
        });
      });
    });
};

export const register = ({ username, password, email }) => (dispatch) => {
  const config = {
    method: "POST",
    body: JSON.stringify({ username, password, email }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  let status = null;
  fetch("/api/auth/register", config)
    .then((res) => {
      status = res.status;
      if (!res.ok) {
        throw res.json();
      } else {
        return res.json();
      }
    })
    .then((data) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      err.then((messages) => {
        dispatch(getErrors(messages, status));
        dispatch({
          type: REGISTER_FAIL,
        });
      });
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const config = getConfig(getState);

  let status = null;
  fetch("/api/auth/logout/", config)
    .then((res) => {
      status = res.status;
      if (!res.ok) {
        throw res.text();
      } else {
        return res.text();
      }
    })
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      err.then((messages) => {
        dispatch(getErrors(messages, status));
        dispatch({
          type: LOGOUT_FAIL,
        });
      });
    });
};

export const getConfig = (getState) => {
  const token = getState().authentication.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
