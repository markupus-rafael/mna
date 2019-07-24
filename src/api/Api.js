import axios from 'axios';
import { BASE_URL } from "../constants/api";

//TODO MAKE API

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application-json'
    }

});

export default API;
