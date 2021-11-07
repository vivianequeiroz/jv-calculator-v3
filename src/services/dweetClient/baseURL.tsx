import axios from 'axios';

export const dweetBaseURL = axios.create({
  baseURL: 'https://dweet.io',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
