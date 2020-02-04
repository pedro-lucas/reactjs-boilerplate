export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const SIGN_FAILURE = '@auth/SIGN_FAILURE';
export const SIGN_OUT = '@auth/SIGN_OUT';

export function signInRequest(username, password) {
   return {
      type: SIGN_IN_REQUEST,
      payload: { username, password },
   };
}

export function signInSuccess(token, user) {
   return {
      type: SIGN_IN_SUCCESS,
      payload: { token, user },
   };
}

export function signFailure() {
   return {
      type: SIGN_FAILURE,
   };
}

export function signOut() {
   return {
      type: SIGN_OUT,
   };
}
