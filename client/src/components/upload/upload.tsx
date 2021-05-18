import React, {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';

import Breadcrumbs from '../layouts/breadcrumbs/breadcrumbs';
import MsnForm from '../utils/msnForm/msnForm';

import {clientAxios, cloudinaryAxios } from '../../config/axios';

import LoadGif from '../../img/icons/load-video.gif';

const Icon  = <svg className="w-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                <path d="M22,12a1,1,0,0,0-1,1v4.34A2.663,2.663,0,0,1,18.34,20H5.66A2.663,2.663,0,0,1,3,17.34V13a1,1,0,0,0-2,0v4.34A4.666,4.666,0,0,0,5.66,22H18.34A4.666,4.666,0,0,0,23,17.34V13A1,1,0,0,0,22,12Z"></path>
                <path d="M6.707,9.707,11,5.414V16a1,1,0,0,0,2,0V5.414l4.293,4.293a1,1,0,0,0,1.414-1.414l-6-6a1,1,0,0,0-1.414,0l-6,6A1,1,0,0,0,6.707,9.707Z"></path>
              </svg>

const Upload = ()=> {

  // load contexts

  const alertContext = useContext(AlertContext);
  const { alert, alertShow } = alertContext;
  
  const [_video, set_video] = useState<iVideo>({
    name:        '',
    description:  '',
    category: 'public',
    video: {
      id: '',
      url: '',
    }
  })

  const {name, description, category, video } = _video;

  const [videoLoad, set_videoLoad] = useState(false);
  const [viewLoad, set_viewLoad] = useState(false);

  const onChange = (e:any) =>{
    e.preventDefault();

    set_video({
      ..._video,
      [e.target.name]: e.target.value
    })

  }

  //load file video

  const fileUpLoad = (e:any) => {

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e:any) => {

        set_videoLoad(true);
        // load state video
        set_video({
          ..._video,
          video: e.target.result
        })

      };

      reader.readAsDataURL(e.target.files[0]);
    }

  };


  // Add video
  const videoAdd = async (data:any) => {
    try {
        const response = await clientAxios.post('/api/videos', data);

        set_video({
          name:        '',
          description:  '',
          category: 'public',
          video: {
            id: '',
            url: ''
          }
        })

        set_videoLoad(false);
        set_viewLoad(false);

    } catch (error) {
        console.log(error);
    }
}

// load video

  const onSubmit = async (e:any) =>  {
		e.preventDefault();

    if( name.trim() === '' || description.trim() === '' || 
        category.trim() === '' || !videoLoad )
        {
          alertShow('success', 'All fields are required');

        }else{

          set_viewLoad(true);

          //-> load video in cloudinary

           // parameters cloudinary
            const data = {
              'file': video,
              'upload_preset': 'univisiontest'
            }
          
            //const response = await cloudinaryAxios.post('/image/upload', data);
            const response = await cloudinaryAxios.post('/video/upload', data);

            console.log(`cloudinary:`, response.data.asset_id, response.data.url )

            const  { asset_id, url } =  response.data;

            asset_id !== '' 
              ? 
                videoAdd({
                  name,
                  description,
                  category, 
                  video:{
                    id: asset_id,
                    url: url,
                  }
                })
              : console.log(`Error load video data`)

        }
	}

  return (
      <> 
          <section className="bg-white border-default rounded-lg h-full px-4 md:px-8 py-4 mt-4 md:mt-2">
            
          <Breadcrumbs
              name={"Upload"}
              icon={Icon}
              url=""
            />

          {
            viewLoad
              ?
              <div className="loading-video bg-white" style={{minHeight: '70vh'}}>
                <div className="flex-column justify-center items-center relative w-full">
                  <div className="absolute z-10 w-full">
                    <div className="absolute w-full">
                      <p className="text-center text-c1 font-bold pt-10 mt-24">
                        ...Uploading video...
                      </p>
                    </div>
                    <img className="min-w-lg mx-auto" src={LoadGif} alt="Load VIdeo" />
                  </div>
                </div>
              </div>
              :
              <div className="upload">
                
                <form className="upload-content lg:flex"
                      onSubmit={onSubmit} >

                  <div className="lg:w-1/2 md:px-4 mt-4">
                    <div className="upload-video flex flex-col justify-center items-center border-default border-gray-300 w-full lg:h-80 p-8 rounded">
                      <p className="text-c2">Select Video</p>
                      <input  className="form-input mt-1 block w-full"
                              id="video"
                              name="video"
                              type="file" 
                              onChange={fileUpLoad} />
                    </div>
                  </div>
                  <div className="upload-form px-4 lg:w-1/2">
                    <div className="mt-4">
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
                      <button className="bg-c2 text-white text-xl font-bold shadow-md  rounded-md py-1 px-8 text-center">Upload</button>
                      <Link className="bg-c3 text-white text-xl font-bold shadow-md  rounded-md py-1 px-8 text-center"
                        to="/my-videos">
                          Cancel
                      </Link>
                    </div>
                    
                  </div>
                </form>

              </div>

          }


           

          </section>
      </>
  )
}


interface iVideo {
  name: string;
  description: string;
  category: string;
  video: object;
}

export default Upload
