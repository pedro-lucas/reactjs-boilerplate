import { cloneableGenerator } from '@redux-saga/testing-utils';
import { signIn } from '~/store/modules/auth/sagas';
import { SIGN_IN_SUCCESS, SIGN_FAILURE } from '~/store/modules/auth/actions';

it('Deve permitir o login do usuário', () => {
   const gen = cloneableGenerator(signIn)({
      payload: { username: 'username', password: 'password' },
   });
   gen.next();
   expect(SIGN_IN_SUCCESS).toEqual(
      gen.next({
         data: { token: 'xxxx', user: { id: 1, name: 'teste' } },
      }).value.payload.action.type
   );
});

it('Deve gerar uma exceção no login do usuário', () => {
   const gen = cloneableGenerator(signIn)({
      payload: { username: 'username', password: 'password' },
   });
   gen.next();
   expect(SIGN_FAILURE).toEqual(
      gen.throw('Falha na autenticação.').value.payload.action.type
   );
});
