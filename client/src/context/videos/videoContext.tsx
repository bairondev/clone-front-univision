import React from 'react';
import {VideoContextState} from '../../types';

const contextDefaultValues: VideoContextState = {
    msg: null, 
    video: null,
    videoAdd: () => {}
}

const videoContext = React.createContext<VideoContextState>(contextDefaultValues);

export default videoContext;