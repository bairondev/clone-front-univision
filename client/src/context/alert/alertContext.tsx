import React, { createContext } from "react";
import {AlertContextState} from '../../types';

const contextDefaultValues: AlertContextState = {
    alert: {
            type:'',
            msg:''
        },
    alertShow: () =>{}
}


const alertContext = createContext<AlertContextState>(contextDefaultValues);

export default alertContext;