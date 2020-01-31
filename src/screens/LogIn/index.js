import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
   username: Yup.string().required('O usuário é obrigatório'),
   password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
   const dispatch = useDispatch();
   const loading = useSelector(state => state.auth.loading);

   function handleSubmit({ username, password }) {
      dispatch(signInRequest(username, password));
   }

   return (
      <>
         <Form schema={schema} onSubmit={handleSubmit}>
            <strong>SEU USUÁRIO</strong>
            <Input name="username" placeholder="exemplo@email.com" />
            <strong>SUA SENHA</strong>
            <Input name="password" type="password" placeholder="*********" />
            <button type="submit">
               {loading ? 'Carregando...' : 'Entrar no Sistema'}
            </button>
         </Form>
      </>
   );
}
