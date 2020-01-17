import React from "react";
import { Route, Redirect } from "react-router-dom";

interface IPrivateRouteProps {
  component: React.FC<any>;
  authed: boolean;
  adminCheck?: boolean;
  location?: string;
  path?: string;
  exact?: boolean;
}

function PrivateRoute({
  component: Component,
  authed,
  adminCheck,
  location,
  ...rest
}: IPrivateRouteProps) {
  const redirectRoute = adminCheck ? "/" : "/uzihoon/admin/login";

  return (
    <Route
      {...rest}
      render={props =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: redirectRoute, state: { from: location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
