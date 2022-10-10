import axios from 'axios';

const api = () => {
   return axios.create({
      baseURL: process.env.REACT_APP_API_ROOT,
   });
};

export { api };
