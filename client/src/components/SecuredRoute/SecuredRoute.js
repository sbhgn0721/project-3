import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from '../../utils/Auth';

function SecuredRoute(props) {
  const { component: Component, path, checkingSession } = props;
  return (
    <Route path={path} render={() => {
      // this is the location for public info, like a welcome component, before users are logged in
      if (checkingSession) return <h3 className="text-center">Validating session...</h3>;
      if (!auth0Client.isAuthenticated()) {
        auth0Client.signIn();
        return <div></div>;
      }
      return <Component />
    }} />
  );
}

export default SecuredRoute;
