import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import Breadcrumbs from '../layouts/breadcrumbs/breadcrumbs';
import VideosItems from './../videos/videos-items';

import {clientAxios} from '../../config/axios';

const Icon  = <svg className="w-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                <path d="M22.669,10.257l-10-9a1,1,0,0,0-1.338,0l-10,9a1,1,0,0,0,1.338,1.486L12,3.345l9.331,8.4a1,1,0,0,0,1.338-1.486Z"></path>
                <path d="M20,13a1,1,0,0,0-1,1v5.774A1.227,1.227,0,0,1,17.774,21H6.226A1.227,1.227,0,0,1,5,19.774V14a1,1,0,0,0-2,0v5.774A3.229,3.229,0,0,0,6.226,23H17.774A3.229,3.229,0,0,0,21,19.774V14A1,1,0,0,0,20,13Z"></path>
              </svg>

const HomeComponent = () => {

  let videoLoad = false;

  const [videos, videos_set] = useState([])
  // Data videos
  const videosData = async () => {
    try {
        const response = await clientAxios.get('/api/videos');
        videoLoad = true;
        videos_set(response.data);

    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {

    videosData();

  }, [videoLoad] );

  return (
          <section className="bg-white border-default rounded-lg h-full px-4 md:px-8 py-4 mt-4 md:mt-2">
            
            <Breadcrumbs
              name={"Home"}
              icon={Icon}
              url=""
            />

{
                videos.length === 0 
                  ? (
                      <div className="info flex justify-center items-center" style={{minHeight: '70vh'}}>
                        <div className="max-w-md flex-column justify-center items-center text-gray-500">
                          <span className="info-icon block w-32 md:w-40 mx-auto">
                            <svg className="fill-current w-full" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512"><g><g><g><g><path d="M111.302,494c-0.568,0-1.14-0.121-1.673-0.367c-1.298-0.599-2.179-1.844-2.31-3.268L99.4,404H30c-2.209,0-4-1.791-4-4      V30c0-2.209,1.791-4,4-4h460c2.209,0,4,1.791,4,4v370c0,2.209-1.791,4-4,4H239.758l-126.145,89.266      C112.926,493.752,112.116,494,111.302,494z M34,396h69.05c2.067,0,3. 794,1.576,3.983,3.635l7.619,83.095l121.523-85.995      c0.676-0.478,1.483-0.734,2.311-0.734H486V34H34V396z"></path></g><g><path d="M450,324H70c-2.209,0-4-1.791-4-4V70c0-2.209,1.791-4,4-4h380c2.209,0,4,1.791,4,4v250C454,322.209,452.209,324,450,324      z M74,316h372V74H74V316z"></path></g><g><path d="M208.49,284c-0.69,0-1.381-0.179-2-0.536c-1.238-0.714-2-2.035-2-3.464V116.599c0-1.429,0.762-2.75,2-3.464      c1.237-0.715,2.763-0.715,4,0L352,194.835c1.237,0.714,2,2.035,2,3.464s-0.763,2.75-2,3.464l-141.51,81.701      C209.872,283.821,209.181,284,208.49,284z M212.49,123.527v149.545L342,198.299L212.49,123.527z"></path></g></g></g></g>
                            </svg>
                          </span>
                          <h3 className="text-center mt-4 font-bold text-xl">
                            You still have no videos :(
                          </h3>

                          <NavLink className="bg-c2 block text-center cursor-pointer text-white text-xl font-bold shadow-md mt-4 rounded-md py-1 px-8"
                            to="upload">Create video</NavLink>
                        </div>
                      </div>
                  )
                  : <>
                    <div className="videos__list grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {videos.map((video, key)=>(
                          <VideosItems 
                            key   = {key}
                            view= "home"
                            videoData = { video } />
                        ))}
                    </div>
                  </>
              }

          </section>
  )
}

export default HomeComponent
