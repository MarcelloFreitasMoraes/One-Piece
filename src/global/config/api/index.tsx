import axios from 'axios';

export const API = axios.create({
  baseURL: `https://one-piece-br-default-rtdb.firebaseio.com`,
});