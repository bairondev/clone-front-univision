import React from 'react';
import {AuthContextState} from '../../types';

const contextDefaultValues: AuthContextState = {
    token: "",
    authenticated: null,
    user: {
        name: ""
    }, 
    msg: {
        type: "",
        msg: "",
    }, 
    load: true,
    userRegister: () =>{},
    userAuthenticated: () =>{},
    userSignOn: () =>{},
    userSignOff: () =>{},
}

const authContext = React.createContext<AuthContextState>(contextDefaultValues)

export default authContext;
