import React from 'react';
import { Redirect, Route } from 'react-router';
import { login } from '../../constants';

import { useUser } from '../../store/user/hook';

export default function ProtectedRoute({ component, ...rest }: any) {
  const { user } = useUser();

  const routeComponent = (props: any) =>
    user.username ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={login} />
    );
  return <Route {...rest} render={routeComponent} />;
}
