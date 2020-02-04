import { cloneableGenerator } from '@redux-saga/testing-utils';
import { signIn } from '~/store/modules/auth/sagas';
import { SIGN_IN_SUCCESS } from '~/store/modules/auth/actions';
import env from '~/config/Environment';

test('Deve permitir o login do usuário', () => {
   const gen = cloneableGenerator(signIn)({
      payload: { username: env.API_TEST_USER, password: env.API_TEST_PASSWORD },
   });
   gen.next();
   expect(gen.next().value.payload.action).toEqual({
      type: SIGN_IN_SUCCESS,
   });
});
