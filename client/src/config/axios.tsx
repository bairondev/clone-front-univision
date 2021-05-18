import axios from 'axios';

export const clientAxios = axios.create({
    baseURL : "http://localhost:4000"
});

export const cloudinaryAxios = axios.create({
    baseURL : "https://api.cloudinary.com/v1_1/bairon-dev"
});
