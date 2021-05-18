import {clientAxios} from './axios';

const tokenAuth = (token:any) => {
    if(token) {
        clientAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete clientAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;