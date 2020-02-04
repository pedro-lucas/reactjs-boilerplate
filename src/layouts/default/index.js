import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';

export default function DefaultLayout({ children }) {
   return (
      <Wrapper>
         <Sidebar />
         <Content>
            <Navbar />
            {children}
         </Content>
      </Wrapper>
   );
}

DefaultLayout.propTypes = {
   children: PropTypes.element.isRequired,
};
