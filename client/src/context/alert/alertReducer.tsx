import { ALERT_SHOW, ALERT_HIDDEN } from '../../types'

export default (state:any, action:any) => {
    
    switch(action.type) { 

        case ALERT_SHOW:
            return {
                alert: action.payload
            }   
        case ALERT_HIDDEN:
            return {
                alert: null
            }
        default:
            return state;

    }
}