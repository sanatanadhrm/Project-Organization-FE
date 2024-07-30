import axios from 'axios';
import { AxiosError } from 'axios';

export function isAxiosError(error: any): error is AxiosError {
  return error.isAxiosError === true;
}


const instance = axios.create({
  baseURL: 'http://localhost:3000', // Base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;