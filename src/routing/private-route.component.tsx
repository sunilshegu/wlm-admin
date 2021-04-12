import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { getAuthorizationToken } from '../http/helpers';
import { PATHS } from './routing.helpers';

const PrivateRoute = (props: RouteProps) => {
    const isAuthenticated = !!getAuthorizationToken();
    return isAuthenticated ? <Route {...props} /> : <Redirect to={{ pathname: PATHS.LOGIN, state: { from: props.location } }}/>;
}

export default PrivateRoute;