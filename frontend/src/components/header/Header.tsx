import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../redux/actions/authenticationActions";

import { MyReduxState } from "../../redux/reducers/rootReducerType";

import "./Header.scss";

interface ComponentProps {
  isAuthenticated: boolean | null;
  logout: () => void;
}

const Header = (props: ComponentProps) => {
  const { isAuthenticated, logout } = props;

  const authLinks = (
    <div className="header__links">
      <Link className="header__links__link" to="/">
        Leads
      </Link>
      <button className="header__links__link" onClick={logout}>
        Log Out
      </button>
    </div>
  );

  const guestLinks = (
    <div className="header__links">
      <Link className="header__links__link" to="/login">
        Login
      </Link>
      <Link className="header__links__link" to="/register">
        Register
      </Link>
    </div>
  );
  return (
    <div className="header">
      <span className="header__title">Leads</span>
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
};

const mapStateToProps = (state: MyReduxState) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
