import React, { useReducer } from 'react';
import VideoContext from './videoContext';
import VideoReducer from './videoReducer';

import {clientAxios} from '../../config/axios';

import { 
    VIDEO_ADD
} from '../../types';


const VideoState = (props:any) => {

    const initialState = {
        video: null, 
        msg: null
    }

    const [state, dispatch] = useReducer(VideoReducer, initialState);

    // Add video
    const videoAdd = async (data:any) => {
        
        try {

            const response = await clientAxios.post('/api/videos', data);
            // @ts-ignore            
            dispatch({
                type: VIDEO_ADD,
                payload: response.data
            })

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <VideoContext.Provider
            value={{
                video: state.video,
                msg: state.msg,
                videoAdd
            }}>
            {props.children}
        </VideoContext.Provider>
    )
}

export default VideoState;  