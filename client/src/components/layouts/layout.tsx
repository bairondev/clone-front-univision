import React from 'react';

import Background from '../../img/bg/bg-01.jpg';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';

const Layout = (props:any) => {
    return(
        <> 
            <Header/>
            <div className="bg-white pt-10 md:flex items-start object-contain bg-cover bg-right min-h-screen relative" style={{backgroundImage: `url(${Background})`}}>
                <div className="sidebar flex-none md:w-52">
                    <Sidebar/>
                </div>        
                <div className="flex-grow p-4 md:p-8">
                    {props.children}
                </div>
            </div>
        </>
    )   
}

export default Layout;