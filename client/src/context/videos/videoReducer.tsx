import { 
    VIDEO_ADD,
    VIDEO_VALIDATE,
    VIDEO_DELETE,
    VIDEO_CURRENT,
    VIDEO_UPDATE,
    VIDEO_CLEAN
} from '../../types';

export default ({state, action}:any) => {
    switch(action.type) {
        case VIDEO_ADD:
            return {
                ...state,
                video: null,
                msg: null
            }
        case VIDEO_VALIDATE:
            return {
                ...state,
                errortarea: true
            }
        case VIDEO_DELETE:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.filter((tarea:any) => tarea._id !== action.payload )
            }
        case VIDEO_UPDATE:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.map((tarea:any) => tarea._id === action.payload._id ? action.payload : tarea )
            }
        case VIDEO_CURRENT:
            return {
                ...state,
                tareaseleccionada: action.payload
            }
        case VIDEO_CLEAN:
            return {
                ...state,
                tareaseleccionada: null
            }
        default:
            return state;
    }
}