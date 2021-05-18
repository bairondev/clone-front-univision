import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../../../context/authentication/authContext';

import LogoMain from '../../../img/logo-main.svg';
import './Header.scss'

function Header() {

    const authContext = useContext(AuthContext);
    const { user, userAuthenticated, userSignOff } = authContext;

    useEffect(() => {
        userAuthenticated();
    },[])

  return (
      <>
    <header className="sidebar-head w-full fixed top-0 left-0 z-50 bg-white flex justify-between p-4 shadow-md">
        <div className="sidebar-brand flex">
            <h2 className="head__logo">
                <img className="w-36" src={LogoMain} alt="Univision Logo" />
            </h2>
        </div>

        <span className="sidebar-option flex">
        { user ?
            <>
                <button className="head-title transition ease-in font-bold text-c2 hover:text-gray-800 flex mr-4"
                    onClick={() => userSignOff() }>
                    <span className="title-icon">

                    <svg className="w-5 fill-current" xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
                            <g transform="translate(0,-952.36218)">
                            <path d="m 65.165071,958.36218 c 9.249697,0 16.834925,7.58604 16.834925,16.80899 l 0,54.34793 c 0,9.2542 -7.585228,16.8431 -16.834925,16.8431 l -30.364264,0 c -9.218408,0 -16.800803,-7.5889 -16.800803,-16.8431 l 0,-54.34793 c 0,-9.22295 7.582394,-16.80899 16.800803,-16.80899 l 30.364264,0 z m 0,5.45525 -30.364264,0 c -6.237708,0 -11.34822,5.11299 -11.34822,11.35374 l 0,54.34793 c 0,6.2868 5.110512,11.3878 11.34822,11.3878 l 30.364264,0 c 6.283807,0 11.382342,-5.101 11.382342,-11.3878 l 0,-24.4463 -33.567732,0 8.656157,8.5579 a 2.7350955,2.7364202 0 1 1 -3.850937,3.8868 l -13.358939,-13.2289 a 2.7265773,2.7278978 0 0 1 0,-3.8869 l 13.393027,-13.19489 a 2.7265773,2.7278978 0 0 1 1.942476,-0.78418 2.7265773,2.7278978 0 0 1 0.272622,0 2.7265773,2.7278978 0 0 1 1.601751,4.67106 l -8.656157,8.52383 33.567732,0 0,-24.44634 c 0,-6.24075 -5.098535,-11.35374 -11.382342,-11.35374 z"></path>
                            </g>
                        </svg>
                        
                    </span>
                    Exit
                </button>
                <span className="user-info flex text-c2 ml-auto mr-4 font-bold text-center"> 
                    <span className="user-info__icon">
                        <svg className="w-5 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 16 16">
                            <path d="M4.8,4.85c0,1.765,1.436,3.2,3.2,3.2s3.2-1.436,3.2-3.2C11.2,3.086,9.765,1.65,8,1.65S4.8,3.086,4.8,4.85z M8,2.65  c1.213,0,2.2,0.986,2.2,2.199S9.213,7.05,8,7.05s-2.2-0.987-2.2-2.2S6.787,2.65,8,2.65z"></path>
                            <path d="M12.1,13.85V12.5c0-2.261-1.839-4.1-4.1-4.1s-4.1,1.839-4.1,4.1v1.35h1V12.5c0-1.709,1.391-3.1,3.1-3.1s3.1,1.391,3.1,3.1  v1.35H12.1z"></path>
                        </svg>
                    </span>
                    @{user.name}
                </span>
            </>
            : <Link    className="user-info flex text-c2 ml-auto mr-4 font-bold text-center"
                    to="login"> 
                <span className="user-info__icon">
                    <svg className="w-5 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 16 16">
                        <path d="M4.8,4.85c0,1.765,1.436,3.2,3.2,3.2s3.2-1.436,3.2-3.2C11.2,3.086,9.765,1.65,8,1.65S4.8,3.086,4.8,4.85z M8,2.65  c1.213,0,2.2,0.986,2.2,2.199S9.213,7.05,8,7.05s-2.2-0.987-2.2-2.2S6.787,2.65,8,2.65z"></path>
                        <path d="M12.1,13.85V12.5c0-2.261-1.839-4.1-4.1-4.1s-4.1,1.839-4.1,4.1v1.35h1V12.5c0-1.709,1.391-3.1,3.1-3.1s3.1,1.391,3.1,3.1  v1.35H12.1z"></path>
                    </svg>
                </span>
                Login
            </Link>
         }
    
        </span>
        </header>
      </>
  )
}

export default Header
