import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../img/logo.svg';
import Pattern from '../../../img/bg/pattern-01.png';

import './sidebar.scss';

const Sidebar = () => {
  
  return (
      <>   

        <div className="sidebar-nav bg-no-repeat bg-bottom fixed z-20 bottom-0 md:top-8 w-full md:w-52 md:mt-10 bg-white md:bg-gray-100 rounded-tr-lg md:min-h-screen"
            style={{ borderBottomRightRadius:'120px', backgroundImage: `url(${Pattern})`}}>
            <nav className="flex md:flex-col items-end md:items-center md:pt-8">
              <NavLink 
                to="/home"
                activeClassName="active text-c4"
                className="nav__link" >
                  <span className="nav__icon flex rounded w-7 p-1 mr-2">
                    <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                      <path d="M22.669,10.257l-10-9a1,1,0,0,0-1.338,0l-10,9a1,1,0,0,0,1.338,1.486L12,3.345l9.331,8.4a1,1,0,0,0,1.338-1.486Z"></path>
                      <path d="M20,13a1,1,0,0,0-1,1v5.774A1.227,1.227,0,0,1,17.774,21H6.226A1.227,1.227,0,0,1,5,19.774V14a1,1,0,0,0-2,0v5.774A3.229,3.229,0,0,0,6.226,23H17.774A3.229,3.229,0,0,0,21,19.774V14A1,1,0,0,0,20,13Z"></path>
                    </svg>
                  </span> Home
                </NavLink>
                  
                  <NavLink to="/my-videos"
                    activeClassName="active text-c1"
                    className="nav__link">
                      <span className="nav__icon flex rounded w-7 p-1 mr-2">
                  <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                    <path d="M14.135,4H3.865A2.868,2.868,0,0,0,1,6.865v10.27A2.868,2.868,0,0,0,3.865,20h10.27A2.868,2.868,0,0,0,17,17.135V6.865A2.868,2.868,0,0,0,14.135,4ZM15,17.135a.866.866,0,0,1-.865.865H3.865A.866.866,0,0,1,3,17.135V6.865A.866.866,0,0,1,3.865,6h10.27A.866.866,0,0,1,15,6.865Z"></path>
                    <path d="M22.472,5.118a1,1,0,0,0-1.027.05l-3,2a1,1,0,1,0,1.11,1.664L21,7.869v8.262l-1.445-.963a1,1,0,0,0-1.11,1.664l3,2A1,1,0,0,0,23,18V6A1,1,0,0,0,22.472,5.118Z"></path>
                  </svg>
                  </span>
                  My Videos
                </NavLink>
                  
                  <NavLink
                    to="/upload"
                    activeClassName="active text-c2"
                    className="nav__link" >
                      <span className="nav__icon flex rounded w-7 p-1 mr-2">
                  <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 24 24" x="0px" y="0px">
                    <path d="M22,12a1,1,0,0,0-1,1v4.34A2.663,2.663,0,0,1,18.34,20H5.66A2.663,2.663,0,0,1,3,17.34V13a1,1,0,0,0-2,0v4.34A4.666,4.666,0,0,0,5.66,22H18.34A4.666,4.666,0,0,0,23,17.34V13A1,1,0,0,0,22,12Z"></path>
                    <path d="M6.707,9.707,11,5.414V16a1,1,0,0,0,2,0V5.414l4.293,4.293a1,1,0,0,0,1.414-1.414l-6-6a1,1,0,0,0-1.414,0l-6,6A1,1,0,0,0,6.707,9.707Z"></path>
                  </svg>
                  </span>
                  Upload
                  </NavLink>
                  <span className="absolute bottom-0 w-full hidden md:flex justify-end items-end"><img className=" w-52 -mr-10 mb-10" src={Logo} alt="Univision Logo" /></span></nav>
          </div>
      </>
  )
}

export default Sidebar
