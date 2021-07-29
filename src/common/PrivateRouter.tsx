import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

interface IPrivateRouteProps {
  component: React.FC<any>;
  authed: boolean;
  adminCheck?: boolean;
  path: string;
  exact?: boolean;
  loginPage?: boolean;
  loc?: string;
}

function PrivateRoute({
  component: Component,
  authed,
  adminCheck,
  path,
  loc,
  loginPage,
  ...rest
}: IPrivateRouteProps) {
  const getRedirectRoute = () => {
    if (loginPage) {
      if (authed) {
        return loc || '/uzihoon/admin/write';
      }
      return loc || '/uzihoon/admin/write';
    } else {
      return '/uzihoon/admin/login';
    }
  };

  return (
    <Route
      {...rest}
      path={path}
      render={props =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: getRedirectRoute(), state: { from: path } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
