import React, { useReducer } from 'react';

import alertContext from './alertContext';
import alertReducer from './alertReducer';

import {ALERT_SHOW, ALERT_HIDDEN} from '../../types';

const AlertState = (props:any) => {

    const initialState = {
        alert: null
    }

    const [ state, dispatch ] = useReducer(alertReducer, initialState);

    const alertShow = ( type:string, msg:string ) => {
        dispatch({
            type: ALERT_SHOW,
            payload: {
                type, 
                msg
            }
        });
 
        setTimeout(() => {
            dispatch({
                type: ALERT_HIDDEN
            })
        }, 3000);
    }


    return (
        <alertContext.Provider
            value={{
                alert: state.alert,
                alertShow
            }}
        > 
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;