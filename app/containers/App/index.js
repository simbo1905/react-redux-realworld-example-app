/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

/**
 * Layouts
 */

import AppLayout from 'layouts/App';
import BaseLayout from 'layouts/Base';

/**
 * Pages
 */

import Login from 'containers/Login';
import Dashboard from 'containers/Dashboard';
import Users from 'containers/Users';
import Passwords from 'containers/Passwords';
import Groups from 'containers/Groups';
import Profile from 'containers/Profile';
import Tools from 'containers/Tools';
import Reports from 'containers/Reports';
import Billing from 'containers/Billing';
import Company from 'containers/Company';
import PageNotFound from 'containers/PageNotFound';

/**
 * Layout Route wrapper
 * Use this to wrap pages in different layouts
 */
  const RouteWithWrapper = ({ WrapperComponent, component, ...rest }) => {
    const Component = component;
    return (
      <Route
        {...rest}
        render={(props) => (
          <WrapperComponent>
            <Component {...props} />
          </WrapperComponent>
        )}
      />
    );
  };

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - UniqKey"
        defaultTitle="UniqKey"
      >
        <meta name="description" content="UniqKey - Stay safe" />
      </Helmet>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <RouteWithWrapper path="/login" WrapperComponent={BaseLayout} component={Login} />
        <RouteWithWrapper path="/dashboard" WrapperComponent={AppLayout} component={Dashboard} />
        <RouteWithWrapper path="/users" WrapperComponent={AppLayout} component={Users} />
        <RouteWithWrapper path="/passwords" WrapperComponent={AppLayout} component={Passwords} />
        <RouteWithWrapper path="/reports" WrapperComponent={AppLayout} component={Reports} />
        <RouteWithWrapper path="/profile" WrapperComponent={AppLayout} component={Profile} />
        <RouteWithWrapper path="/tools" WrapperComponent={AppLayout} component={Tools} />
        <RouteWithWrapper path="/groups" WrapperComponent={AppLayout} component={Groups} />
        <RouteWithWrapper path="/billing" WrapperComponent={AppLayout} component={Billing} />
        <RouteWithWrapper path="/company" WrapperComponent={AppLayout} component={Company} />
        <RouteWithWrapper path="" WrapperComponent={BaseLayout} component={PageNotFound} />
        <RouteWithWrapper WrapperComponent={BaseLayout} component={PageNotFound} />
      </Switch>
    </div>
  );
}
