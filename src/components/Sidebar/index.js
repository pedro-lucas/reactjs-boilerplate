import React from 'react';
import { Wrapper, Container, imgStyle, TextSpan } from './styles';
import logo from '~/assets/img/logo.png';

export default function Sidebar() {
   return (
      <Wrapper>
         <Container>
            <img style={imgStyle} src={logo} alt="PSD Logo" />{' '}
            <TextSpan>PSD Boilerplate</TextSpan>
         </Container>
      </Wrapper>
   );
}
