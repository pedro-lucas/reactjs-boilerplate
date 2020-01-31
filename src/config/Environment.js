const config = {
   __DEV__: process.env.NODE_ENV === 'development',
};

(Object.entries(process.env) || []).forEach(([key, value]) => {
   const up = key.toLocaleUpperCase();
   if (up.indexOf('REACT_APP_') > -1) {
      const nKey = up.replace('REACT_APP_', '');
      config[nKey] = value;
   }
});

config.API_HOST = config.API_HOST || 'http://api.positivoon.com.br';

export default config;
