import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom';
// @ts-ignore  
import { ReactVideo } from "reactjs-media";

import Breadcrumbs from '../layouts/breadcrumbs/breadcrumbs';
import MsnForm from '../utils/msnForm/msnForm';

import AlertContext from '../../context/alert/alertContext';

import {clientAxios} from '../../config/axios';

import PosterVideo from '../../img/bg/poster-video.png';

const Icon  = <svg className="w-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                <path d="M14.135,4H3.865A2.868,2.868,0,0,0,1,6.865v10.27A2.868,2.868,0,0,0,3.865,20h10.27A2.868,2.868,0,0,0,17,17.135V6.865A2.868,2.868,0,0,0,14.135,4ZM15,17.135a.866.866,0,0,1-.865.865H3.865A.866.866,0,0,1,3,17.135V6.865A.866.866,0,0,1,3.865,6h10.27A.866.866,0,0,1,15,6.865Z"></path>
                <path d="M22.472,5.118a1,1,0,0,0-1.027.05l-3,2a1,1,0,1,0,1.11,1.664L21,7.869v8.262l-1.445-.963a1,1,0,0,0-1.11,1.664l3,2A1,1,0,0,0,23,18V6A1,1,0,0,0,22.472,5.118Z"></path>
              </svg>

const VideoUpdate = (props:any) => {

    const id_video = props.match.params.id;

    const alertContext = useContext(AlertContext);
    const { alert, alertShow } = alertContext;

    const [videoLoad, videoLoad_set ]     = useState(false);
    const [updateLoad, updateLoad_set ]   = useState(true);
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

    const { category, description, name, video, created } = _video;

    useEffect(() => {

    videoData(id_video);

    }, [videoLoad] );

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

    const onChange = (e:any) =>{
    e.preventDefault();

    video_set({
      ..._video,
      [e.target.name]: e.target.value
    })

    }
    // Update video
    const videoUpdate = async (id:string) => {

        try {
            const response = await clientAxios.put(`/api/videos/update/${id}` , _video );
            updateLoad_set(false);
            setTimeout(() => {
                redirect_set( true );
            }, 1200 )
        } catch (error) {
            console.log(error);
        }
    }

    // send update video
    const onSubmit = async (e:any) =>  {
        e.preventDefault();

        if( name.trim() === '' || 
            description.trim() === '' || 
            category.trim() === '') 
            { 
                alertShow('success', 'All fields are required');
        }else{
            videoUpdate(id_video)
        }
    }

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
                    <div className="upload">
                    {
                        updateLoad
                            ?
                            
                        <form className="upload-content lg:flex"
                                onSubmit={onSubmit} >

                            <div className="lg:w-1/2 md:px-4 mt-4">
                                <div className="upload-video flex flex-col justify-center items-center w-full rounded">
                                    <ReactVideo
                                        src={video.url}
                                        poster={PosterVideo}
                                        height="auto"
                                        primaryColor="#00CC81"
                                    />
                                </div>
                            </div>

                            <div className="upload-form px-4 lg:w-1/2">
                                <div className="mt-4">
                                    <span className="font-bold text-sm">
                                        <b className="text-c2 mr-2">Created: </b>  {created} </span>
                                </div>
                                <div className="mt-0">
                                    <span className="text-c2">Name</span>
                                    <input  className="form-input mt-1 block w-full"
                                            id="name"
                                            name="name"
                                            type="text" 
                                            placeholder="name"
                                            value={name}
                                            onChange={onChange} />
                                </div>
                                <div className="mt-4">
                                <span className="text-c2">Description</span>
                                <textarea className="form-input mt-1 block w-full h-40"
                                            id="description"
                                            name="description" 
                                            placeholder="Description"
                                            value={description}
                                            onChange={onChange} > </textarea>
                                </div>
                                <div className="mt-4">
                                    <span className="text-c2">Category</span>
                                    <select className="form-input mt-1 block w-full"
                                            id="category"
                                            name="category" 
                                            value={category}
                                            onChange={onChange} >
                                        <option value="public">Public </option>
                                        <option value="private">Private</option>
                                    </select>
                                </div>
                                {
                                alert 
                                    ? <MsnForm type={alert.type} msg={alert.msg} />
                                    : null
                                }
                                <div className="mt-16 flex justify-between items-end">
                                    <button className="bg-c2 text-white text-xl font-bold shadow-md  rounded-md py-1 px-8 text-center">
                                        Update
                                    </button>
                                    <Link className="bg-c3 text-white text-xl font-bold shadow-md  rounded-md py-1 px-8 text-center"
                                        to="/my-videos">
                                        Cancel
                                    </Link>
                                </div>
                                
                            </div>
                        </form>

                        :
                            <>
                                    
                                <div className="video__content flex justify-center">
                                    <div className="px-4 text-c2">
                                        <svg className="w-24 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                                            <path d="M14.135,4H3.865A2.868,2.868,0,0,0,1,6.865v10.27A2.868,2.868,0,0,0,3.865,20h10.27A2.868,2.868,0,0,0,17,17.135V6.865A2.868,2.868,0,0,0,14.135,4ZM15,17.135a.866.866,0,0,1-.865.865H3.865A.866.866,0,0,1,3,17.135V6.865A.866.866,0,0,1,3.865,6h10.27A.866.866,0,0,1,15,6.865Z"></path>
                                            <path d="M22.472,5.118a1,1,0,0,0-1.027.05l-3,2a1,1,0,1,0,1.11,1.664L21,7.869v8.262l-1.445-.963a1,1,0,0,0-1.11,1.664l3,2A1,1,0,0,0,23,18V6A1,1,0,0,0,22.472,5.118Z"></path>
                                        </svg>
                                        <h3 className="text-center mt-8">Video Updated</h3>
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

interface iVideo {
    _id:string;
    name: string;
    description: string;
    category: string;
    video: {
        url:string;
    },
    created: string;
  }

export default VideoUpdate
