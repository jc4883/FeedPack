import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { MyReduxState } from "../../redux/reducers/rootReducerType";

import Spinner from "../common/Spinner";

interface ComponentProps {
  component: React.FunctionComponent | React.ClassType<any, any, any>;
  path: string;
  auth: MyReduxState["authentication"];
  exact?: boolean;
}

const PrivateRoute = (props: ComponentProps) => {
  const { component: Component, path, exact, auth } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if (auth.isLoading) {
          return (
            <Spinner
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                opacity: 0.4,
              }}
            />
          );
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state: MyReduxState) => ({
  auth: state.authentication,
});

export default connect(mapStateToProps)(PrivateRoute);
