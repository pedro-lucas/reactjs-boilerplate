/* eslint-disable import/no-extraneous-dependencies */
// O pacote Reactotron é uma dependência para auxílio no desenvolvimento, quando for compilado para produção não será usado.
import env from './Environment';

if (env.__DEV__) {
   const Reactotron = require('reactotron-react-js').default;
   const reactotronSaga = require('reactotron-redux-saga');
   const { reactotronRedux } = require('reactotron-redux');

   const tron = Reactotron.configure()
      .use(reactotronRedux())
      .use(reactotronSaga())
      .connect();

   tron.clear();

   console.tron = tron;
}
