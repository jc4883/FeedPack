import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../redux/actions/authenticationActions";

import { MyReduxState } from "../../redux/reducers/rootReducerType";

interface ComponentProps {
  isAuthenticated: boolean | null;
  logout: () => void;
}

const Header = (props: ComponentProps) => {
  const { isAuthenticated, logout } = props;

  const authLinks = (
    <div>
      <Link to="/">Leads</Link>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  const guestLinks = (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
  return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
};

const mapStateToProps = (state: MyReduxState) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
