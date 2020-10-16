import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spotty-cow-46.loca.lt',
});

export default api;
