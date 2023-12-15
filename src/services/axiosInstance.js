import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
      // Add any request headers or modify the request config here
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
      // Do something with the response data
      return response;
    },
    (error) => {
      // Handle and process the error response
      // You can handle specific errors or actions here
      return Promise.reject(error);
    }
);

export default api;