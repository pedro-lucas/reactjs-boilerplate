import axios from 'axios';
import env from '~/config/Environment';

const api = axios.create({
   baseURL: env.API_HOST,
});

export default api;
