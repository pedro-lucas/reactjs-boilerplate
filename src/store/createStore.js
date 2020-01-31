import { createStore, compose, applyMiddleware } from 'redux';
import env from '~/config/Environment';

export default (reducers, middlewares) => {
   const enhancer = env.__DEV__
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

   return createStore(reducers, enhancer);
};
