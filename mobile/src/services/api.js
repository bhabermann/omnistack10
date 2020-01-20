import axios from 'axios';

const api = axios.create({
    // baseURL: 'exp://x3-h5q.anonymous.mobile.exp.direct:80',
    // baseURL: 'http://192.168.15.13:3333',
    baseURL: 'https://192.168.15.13:3333',
});

export default api;