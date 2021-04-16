import React from "react";
import { Route, Redirect } from "react-router-dom";

//AUTH related methods
import { initBackendAPI } from "../helpers/backend";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const backendAPI = initBackendAPI();
      if (isAuthProtected && !backendAPI.getAuthenticatedUser()) {
        return (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        );
      } else if(!isAuthProtected && backendAPI.getAuthenticatedUser()){
        return (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        );
      }

      console.log('isAuth', isAuthProtected);
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default AppRoute;
