import produce from 'immer';
import {
   SIGN_IN_REQUEST,
   SIGN_IN_SUCCESS,
   SIGN_FAILURE,
   SIGN_OUT,
} from './actions';

const INITIAL_STATE = {
   token: null,
   signed: false,
   loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
   return produce(state, draft => {
      switch (action.type) {
         case SIGN_IN_REQUEST: {
            draft.token = null;
            draft.loading = true;
            break;
         }

         case SIGN_IN_SUCCESS: {
            draft.token = action.payload.token;
            draft.signed = true;
            draft.loading = false;
            break;
         }

         case SIGN_FAILURE: {
            draft.loading = false;
            break;
         }

         case SIGN_OUT: {
            draft.token = null;
            draft.signed = false;
            break;
         }

         default:
      }
   });
}
