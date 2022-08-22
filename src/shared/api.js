import axios from 'axios';

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

export const api_auth = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    authorization: `Bearer ${window.sessionStorage.getItem('authorization')}}`,
    'content-type': 'application/json;charset=UTF-8',
  },
});

export const api = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});