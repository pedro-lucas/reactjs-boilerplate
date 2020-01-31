import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import logo from '~/assets/img/logo.png';

export default function AuthLayout({ children }) {
   return (
      <Wrapper>
         <img src={logo} alt="PSD Logo" />
         <Content>{children}</Content>
      </Wrapper>
   );
}

AuthLayout.propTypes = {
   children: PropTypes.element.isRequired,
};
