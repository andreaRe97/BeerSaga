import React from 'react';
import { Redirect, Route } from 'react-router';

import { login } from '../../constants';
import { DomainStatus } from '../../store/types';
import { useUser } from '../../store/user/hook';

export default function ProtectedRoute({ component, ...rest }: any) {
  const { status } = useUser();

  const routeComponent = (props: any) =>
    status === DomainStatus.LOADED ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={login} />
    );
  return <Route {...rest} render={routeComponent} />;
}
