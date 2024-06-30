import axios, { InternalAxiosRequestConfig } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: we can use interceptor to set the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // set the token to the header
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api, API_URL };
