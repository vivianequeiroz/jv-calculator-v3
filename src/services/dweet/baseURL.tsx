import axios from 'axios';

export const dweetBaseURL = axios.create({
  baseURL: 'https://dweet.io/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
