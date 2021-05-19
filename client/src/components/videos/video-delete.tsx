import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Breadcrumbs from '../layouts/breadcrumbs/breadcrumbs';
import {clientAxios} from '../../config/axios';

const Icon  = <svg className="w-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                <path d="M14.135,4H3.865A2.868,2.868,0,0,0,1,6.865v10.27A2.868,2.868,0,0,0,3.865,20h10.27A2.868,2.868,0,0,0,17,17.135V6.865A2.868,2.868,0,0,0,14.135,4ZM15,17.135a.866.866,0,0,1-.865.865H3.865A.866.866,0,0,1,3,17.135V6.865A.866.866,0,0,1,3.865,6h10.27A.866.866,0,0,1,15,6.865Z"></path>
                <path d="M22.472,5.118a1,1,0,0,0-1.027.05l-3,2a1,1,0,1,0,1.11,1.664L21,7.869v8.262l-1.445-.963a1,1,0,0,0-1.11,1.664l3,2A1,1,0,0,0,23,18V6A1,1,0,0,0,22.472,5.118Z"></path>
              </svg>

const VideoDelete = (props:any) => {

  const [videoLoad, videoLoad_set ]     = useState(false);
  const [deleteLoad, deleteLoad_set ]   = useState(true);
  const [redirect, redirect_set ]       = useState(false);

  const [_video, video_set] = useState({
    '_id': '',
    'author': '',
    'category': '',
    'created': '',
    'description': '',
    'name': '',
    'video': {
        'id': '',
        'url': '',
    }
  });

  const {_id, category, created, description, name } = _video;

  // Data videos
  const videoData = async (id:string) => {
    try {
        const response = await clientAxios.get(`/api/videos/preview/${id}`);
        videoLoad_set(true);
        video_set(response.data);

    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {

    videoData(props.match.params.id);

  }, [videoLoad] );

  // delete video
  const deleteVideo = async (id:string) => {
    try {

        const response = await clientAxios.delete(`/api/videos/delete/${id}`);
        deleteLoad_set(false);

        setTimeout(() => {
            redirect_set( true );
        }, 1200 )

    } catch (error) {
        console.log(error);
    }
  }



  return (
      <> 
          <section className="bg-white border-default rounded-lg h-full px-4 md:px-8 py-4 mt-4 md:mt-2" style={{minHeight: '90vh'}}>
            
          <Breadcrumbs
              name={"Delete Video"}
              icon={Icon}
              url="/my-videos"
            />
            

            { videoLoad
                ? 
                <section className="max-w-4xl">
                    <div className="video py-4 border-c3 border-default rounded-lg">
                    { deleteLoad
                        ?
                            <>
                                
                                <div className="video__content w-full px-4">
                                    <div className="video__option flex justify-between">
                                        <span className="my-2 bg-c1 px-2 text-white text-sm rounded-md">
                                            {category}
                                        </span>
                                    </div>
                                    <h3 className="video__title text-md sm:text-2xl font-bold leading-tight mt-4 mb-2 uppercase">
                                        {name}
                                    </h3>
                                    <p className="video__par text-sm sm:text-base text-gray-400 lowercase">
                                        {description}
                                    </p>
                                    <span className="video__date text-sm text-c2">
                                        Published: {created}
                                    </span>
                                </div>
        
                                <div className="video flex justify-between p-4 mt-4">
                                    <button className="border-c3 border-default bg-white text-c3 text-xl font-bold shadow-md rounded-md py-1 px-8 text-center"
                                        onClick={() =>{deleteVideo(_id)}}>
                                    Delete
                                    </button>
                                    <Link className="border-c4 border-default bg-white text-c4 text-xl font-bold shadow-md rounded-md py-1 px-8 text-center"
                                            to="/my-videos">
                                    Cancel
                                    </Link>
                                </div>
        
                            </>

                        : <>
                                
                            <div className="video__content flex justify-center">
                                <div className="px-4 text-c2">
                                    <svg className="w-24 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                                        <path d="M19,7a1,1,0,0,0-1,1V19.191A1.92,1.92,0,0,1,15.99,21H8.01A1.92,1.92,0,0,1,6,19.191V8A1,1,0,0,0,4,8V19.191A3.918,3.918,0,0,0,8.01,23h7.98A3.918,3.918,0,0,0,20,19.191V8A1,1,0,0,0,19,7Z"></path>
                                        <path d="M20,4H16V2a1,1,0,0,0-1-1H9A1,1,0,0,0,8,2V4H4A1,1,0,0,0,4,6H20a1,1,0,0,0,0-2ZM10,4V3h4V4Z"></path>
                                        <path d="M11,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z"></path>
                                        <path d="M15,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z"></path>
                                    </svg>
                                    <h3 className="text-center">Video delete</h3>
                                </div>
                            </div>

                            {
                                redirect
                                    ? ( <Redirect to="/my-videos" /> )
                                    : null
                            }

                        </>
                        
                        }
                        </div>
        
                    </section>
                
                : <p>loading...</p>
            
            }           
            
          </section>
      </>
  ) 
}

export default VideoDelete
