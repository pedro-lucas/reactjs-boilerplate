import React from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, Title, List, Item, Link } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Navbar() {
   const dispatch = useDispatch();

   function handleClick(e) {
      e.preventDefault();
      dispatch(signOut());
      console.log('Signout');
   }

   return (
      <Wrapper>
         <Title>Dashboard</Title>
         <List>
            <Item>
               <Link href="#" onClick={handleClick}>
                  Log out
               </Link>
            </Item>
         </List>
      </Wrapper>
   );
}
