import axios from 'axios';

let urlAPI;

if ( window.location.hostname === 'localhost') {
    urlAPI = "http://localhost:4000";
}else{
    urlAPI = "https://univision-backend.herokuapp.com";
}

export const clientAxios = axios.create({ 
    baseURL: urlAPI 
});

export const cloudinaryAxios = axios.create({
    baseURL : "https://api.cloudinary.com/v1_1/bairon-dev"
});
