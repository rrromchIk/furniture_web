import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

api.interceptors.request.use(
    (config) => {


        return config;
    },
    (error) => {
        // Handle request error

        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {

        return response;
    },
    (error) => {


        return Promise.reject(error);
    }
);

export default api;