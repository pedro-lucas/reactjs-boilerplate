import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
   username: Yup.string().required('O usuário é obrigatório'),
   password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
   const dispatch = useDispatch();
   const loading = useSelector(state => state.auth.loading);

   return (
      <Formik
         initialValues={{
            username: '',
            password: '',
         }}
         validationSchema={schema}
         onSubmit={values => {
            dispatch(signInRequest(values.username, values.password));
         }}
      >
         {() => (
            <Form>
               <strong>SEU USUÁRIO</strong>
               <Field name="username" placeholder="exemplo@email.com" />
               <strong>SUA SENHA</strong>
               <Field name="password" type="password" placeholder="*********" />
               <button type="submit">
                  {loading ? 'Carregando...' : 'Entrar no Sistema'}
               </button>
            </Form>
         )}
      </Formik>
   );
}
