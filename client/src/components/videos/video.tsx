import React, {useState, useEffect} from 'react'

import { ReactVideo } from "reactjs-media";

import Breadcrumbs from '../layouts/breadcrumbs/breadcrumbs';

import {clientAxios} from '../../config/axios';

import PosterVideo from '../../img/bg/poster-video.png';

const Icon  = <svg className="w-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                <path d="M14.135,4H3.865A2.868,2.868,0,0,0,1,6.865v10.27A2.868,2.868,0,0,0,3.865,20h10.27A2.868,2.868,0,0,0,17,17.135V6.865A2.868,2.868,0,0,0,14.135,4ZM15,17.135a.866.866,0,0,1-.865.865H3.865A.866.866,0,0,1,3,17.135V6.865A.866.866,0,0,1,3.865,6h10.27A.866.866,0,0,1,15,6.865Z"></path>
                <path d="M22.472,5.118a1,1,0,0,0-1.027.05l-3,2a1,1,0,1,0,1.11,1.664L21,7.869v8.262l-1.445-.963a1,1,0,0,0-1.11,1.664l3,2A1,1,0,0,0,23,18V6A1,1,0,0,0,22.472,5.118Z"></path>
              </svg>

const Video = (props:any) => {

  const [videoLoad, videoLoad_set ] = useState(false)

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

  const {_id, author, category, created, description, name, video } = _video;

  // Data videos
  const videoData = async (id:string) => {
    try {

        const response = await clientAxios.get(`/api/videos/preview/${id}`);
        //console.log("videoList", response.data)
        videoLoad_set(true);
        video_set(response.data);

    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {

    videoData(props.match.params.id);

  }, [videoLoad] );

  return (
      <> 
          <section className="bg-white border-default rounded-lg h-full px-4 md:px-8 py-4 mt-4 md:mt-2" style={{minHeight: '90vh'}}>
            
          <Breadcrumbs
              name={"Video"}
              icon={Icon}
              url="/my-videos"
            />
            

            { videoLoad
                ?
                <section className="max-w-4xl">
                    <div>
                        <ReactVideo
                            src={video.url}
                            poster={PosterVideo}
                            height="auto"
                            primaryColor="#00CC81"
                        />
                    </div>

                    <div className="video flex py-4">
                        <div className="video__content w-full px-4">
                            <div className="video__option flex justify-between">
                                <span className="m-1 bg-c1 p-1 text-white text-sm rounded-md">
                                    {category}
                                </span>

                                <span className="video__date text-sm text-c2">
                                    Published: {created}
                                </span>
                            </div>
                            <h3 className="video__title text-md sm:text-2xl font-bold leading-tight mt-4 mb-2 uppercase">
                                {name}
                            </h3>
                            <p className="video__par text-sm sm:text-base text-gray-400 lowercase">
                                {description}
                            </p>
                        </div>
                    </div>
                </section>
                
                : <p>loading...</p>
            
            }           
            
          </section>
      </>
  ) 
}

export default Video
