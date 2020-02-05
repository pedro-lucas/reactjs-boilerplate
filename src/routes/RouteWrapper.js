import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { store } from '~/store';
import AuthLayout from '~/layouts/auth';
import DefaultLayout from '~/layouts/default';

export default function RouteWrapper({
   component: Component,
   needsAuth = false,
   ...rest
}) {
   const { signed } = store.getState().auth;

   if (!signed && needsAuth) {
      return <Redirect to="/" />;
   }

   if (signed && rest.path === '/') {
      return <Redirect to="/admin" />;
   }

   const Layout = signed ? DefaultLayout : AuthLayout;

   return (
      <Route
         {...rest}
         render={props => (
            <Layout>
               <Component {...props} />
            </Layout>
         )}
      />
   );
}

RouteWrapper.propTypes = {
   needsAuth: PropTypes.bool,
   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
};

RouteWrapper.defaultProps = {
   needsAuth: true,
};
