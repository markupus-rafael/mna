import axios from 'axios';

const API = axios.create({
    baseURL: BASE_URL,
        timeout: 1000,
});

export default API;
