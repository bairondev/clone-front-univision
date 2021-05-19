import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import PosterVideo from '../../img/bg/poster-video.png';
import ScaleIcon from '../../img/icons/scale.svg';

function VideosItems({view, videoData }:any) {

    const {_id, author, name, description, category, video, created}:iVideo = videoData;
    const [load, load_set ] = useState(true);

    setTimeout(() =>{ 
        load_set(false)
    }, 1200 )
    
  return (
    load 
        ?
        <div className="video animate-pulse flex p-4 shadow-lg rounded-md border-default border-gray-200 bg-white transition ease-in-out hover:bg-gray-100">
            <div className="video-preview flex w-2/5 h-52 bg-gray-200">
            </div>
            <div className="video__content w-3/5 px-4">
                <h3 className="video__title text-md font-bold leading-tight mt-4 mb-2 h-10 bg-gray-200">
                    
                </h3>
                <p className="video__par text-sm text-gray-400 lowercase h-32 bg-gray-200">
                    
                </p>
                <span className="video__date text-sm text-c2">
                    
                </span>
            </div>
        </div>
        : 

    view == "videos"
        ?
        <div className="video flex-row sm:flex p-4 shadow-lg rounded-md border-default border-gray-200 bg-white transition ease-in-out hover:bg-gray-100">
            <Link to={`/video/${_id}`} className="video__thumbnail relative flex sm:w-2/5 max-w-sm  sm:max-h-32" href="#">
                <span className="video-icon absolute w-full flex justify-center items-center h-full">
                    <img className="rounded-lg w-12" src={ScaleIcon} alt="icon" />
                </span>
                <img className="rounded-lg w-full" src={PosterVideo} alt={name} />
            </Link>
            <div className="video__content sm:w-3/5 px-4">
                <div className="video__option flex justify-between">
                    <span className="my-2 bg-c1 px-2 text-white text-sm rounded-md">
                        {category}
                    </span>
                    <span className="option-control flex justify-between">
                        <Link to={`/video/update/${_id}`}  className="text-gray-300 hover:text-c4 flex items-center mr-2">
                            <svg className="w-5 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                                <path d="M14.707,5.293a1,1,0,0,0-1.414,0l-12,12A1,1,0,0,0,1,18v4a1,1,0,0,0,1,1H6a1,1,0,0,0,.707-.293l12-12a1,1,0,0,0,0-1.414ZM5.586,21H3V18.414l11-11L16.586,10Z"></path>
                                <path d="M22.707,5.293l-4-4a1,1,0,0,0-1.414,0l-2,2a1,1,0,0,0,1.414,1.414L18,3.414,20.586,6,19.293,7.293a1,1,0,1,0,1.414,1.414l2-2A1,1,0,0,0,22.707,5.293Z"></path>
                            </svg>
                        </Link>
                        <Link to={`/video/delete/${_id}`}  className="text-gray-300 hover:text-c3 flex items-center">
                            <svg className="w-5 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                                <path d="M19,7a1,1,0,0,0-1,1V19.191A1.92,1.92,0,0,1,15.99,21H8.01A1.92,1.92,0,0,1,6,19.191V8A1,1,0,0,0,4,8V19.191A3.918,3.918,0,0,0,8.01,23h7.98A3.918,3.918,0,0,0,20,19.191V8A1,1,0,0,0,19,7Z"></path>
                                <path d="M20,4H16V2a1,1,0,0,0-1-1H9A1,1,0,0,0,8,2V4H4A1,1,0,0,0,4,6H20a1,1,0,0,0,0-2ZM10,4V3h4V4Z"></path>
                                <path d="M11,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z"></path>
                                <path d="M15,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z"></path>
                            </svg>
                        </Link>
                    </span>
                </div>
                <h3 className="video__title text-md font-bold leading-tight mt-4 mb-2 uppercase break-word">
                    {name}
                </h3>
                <p className="video__par text-sm text-gray-400 lowercase break-word">
                    {description}
                </p>
                <span className="video__date text-sm text-c2">
                    Published: {created}
                </span>
            </div>
        </div>
        : <div className="video p-4 shadow-lg rounded-md border-default border-gray-200 transition ease-in-out hover:bg-gray-100">
            <Link to={`/video/${_id}`} className="video__thumbnail relative flex" href="#">
                <span className="absolute top-0 right-0 m-2 bg-c1 px-2 text-white text-sm rounded-md">
                    {category}
                </span>
                <span className="video-icon absolute w-full flex justify-center items-center h-full">
                    <img className="rounded-lg w-12" src={ScaleIcon} alt="icon" />
                </span>
                <img className="rounded-lg w-full" src={PosterVideo} alt={name} />
            </Link>
        <div className="video__content">
          <h3 className="video__title text-md font-bold leading-tight mt-4 mb-2 uppercase break-word">
            {name}
          </h3>
          <p className="video__par text-sm text-gray-400 lowercase break-word">
              {description}
          </p><span className="video__date text-sm text-c2">
              Published: {created}
            </span>
        </div>
      </div>
  )
}

interface iVideo {
    _id: string;
    author: string;
    name: string;
    description: string;
    category: string;
    video:{
        id:string;
        url:string;
    };
    created:string;
}

export default VideosItems
