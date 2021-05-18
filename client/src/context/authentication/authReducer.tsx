import { 
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    USER_LOAD,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGN_OFF
} from '../../types/index';

export default (state:any, action:any)=> {

    switch(action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token) ;
            return {
                ...state,
                authenticated: true,
                msg: null,
                load: false
            }
        case USER_LOAD: 
            return {
                ...state,
                authenticated: true,
                user: action.payload, 
                load: false
            }
        case SIGN_OFF:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                msg: action.payload, 
                load: false
            }
        
        default:
            return state;
    }
    
}