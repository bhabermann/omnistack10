import axios from 'axios';

const api = axios.create({
    // baseURL: 'exp://x3-h5q.anonymous.mobile.exp.direct:80',
    // baseURL: 'http://127.0.0.1:3333',
    baseURL: 'http://192.168.15.13:3333',
});

api.interceptors.request.use(config => {
    console.warn('Axios Request: ', config);
    return config
})

api.interceptors.response.use(config => {
    console.warn('Axios Response: ', config);
    return config
})

export default api;