import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import qs from 'querystring';

import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';
import api from '~/services/api';
import env from '~/config/Environment';

export function* signIn({ payload }) {
   try {
      const { username, password } = payload;
      const response = yield call(
         api.post,
         '/account/auth',
         qs.stringify({
            username,
            password,
            grant_type: 'password',
            client_id: env.API_CLIENT_ID,
         }),
         {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
            },
         }
      );

      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer: ${token}`;

      yield put(signInSuccess(token, user));

      history.push('/admin');
   } catch (err) {
      toast.error('Falha na autenticação.');
      yield put(signFailure());
   }
}

export function setToken({ payload }) {
   if (!payload) return;

   const { token } = payload.auth;

   if (token) {
      api.defaults.headers.Authorization = `Bearer: ${token}`;
   }
}

export function signOut() {
   history.push('/');
}

export default all([
   takeLatest('persist/REHYDRATE', setToken),
   takeLatest('@auth/SIGN_IN_REQUEST', signIn),
   takeLatest('@auth/SIGN_OUT', signOut),
]);
