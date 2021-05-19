import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {clientAxios} from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    USER_LOAD,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGN_OFF
} from '../../types';

const AuthState = (props:any) => {
    
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null, 
        msg: null, 
        load: true
    }

    const [ state, dispatch ] = useReducer( AuthReducer, initialState );

    // Register new user

    const userRegister = async (data:any) => {

        try {

            const response = await clientAxios.post('/api/user', data);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });

            userAuthenticated();

        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                type: 'alert-error',
                msg: error.response.data.msg
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            })
        }
    }


    const userAuthenticated = async () => {

        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        try {
            const response = await clientAxios.get('/api/auth');
            // console.log(response);
            dispatch({
                type: USER_LOAD,
                payload: response.data.user
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }


    const userSignOn = async (data:any) => {
        
        try {
            const response = await clientAxios.post('/api/auth', data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });

           

            userAuthenticated();
        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                type: 'alert-error',
                msg: error.response.data.msg,
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })

        }
    }

    const userSignOff = () => {

        dispatch({
            type: SIGN_OFF
        })

    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg,
                load: state.load,
                userRegister,
                userSignOn,
                userAuthenticated,
                userSignOff
            } }>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;
