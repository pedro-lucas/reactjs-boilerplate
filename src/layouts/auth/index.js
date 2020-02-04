import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, ContainerImage, imgStyle } from './styles';
import logo from '~/assets/img/logo.png';

export default function AuthLayout({ children }) {
   return (
      <Wrapper>
         <ContainerImage>
            <img style={imgStyle} src={logo} alt="PSD Logo" />
         </ContainerImage>
         <Content>{children}</Content>
      </Wrapper>
   );
}

AuthLayout.propTypes = {
   children: PropTypes.element.isRequired,
};
