export type AlertContextState = {
    alert: {
        type:string,
        msg:string,
    },
    alertShow: (type:string, msg:string) => void
}  

export type AuthContextState = {
    token: string,
    authenticated: null,
    user:{
        name:string
    }, 
    msg:  {
        type: string,
        msg: string,
    }, 
    load: boolean,
    mobileMenu: boolean,
    userRegister: (data:object) => void,
    userAuthenticated: () => void,
    userSignOn: (data:object) => void,
    userSignOff: () => void,
}  

export type VideoContextState = {
    msg: null, 
    video: null,
    videoAdd: (data:object) => void,
}  

export const VIDEO_ADD = 'VIDEO_ADD';
export const VIDEO_VALIDATE = 'VIDEO_VALIDATE';
export const VIDEO_DELETE = 'VIDEO_DELETE';
export const VIDEO_CURRENT = 'VIDEO_CURRENT';
export const VIDEO_UPDATE = 'VIDEO_UPDATE';
export const VIDEO_CLEAN = 'VIDEO_CLEAN';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const USER_LOAD = 'USER_LOAD';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGN_OFF = 'SIGN_OFF';

export const ALERT_SHOW = 'ALERT_SHOW';
export const ALERT_HIDDEN = 'ALERT_HIDDEN';