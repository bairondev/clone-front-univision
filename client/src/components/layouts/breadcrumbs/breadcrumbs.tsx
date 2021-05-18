import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumbs = ({name, icon, url}:IBreadcrums) => {
    return (
        <nav className="w-full mb-4 text-gray-500 flex justify-between items-center">
            <h3 className="head-title font-bold flex uppercase">
            <span className="title-icon">
                {icon}
            </span>
                {name}
            </h3>
            {
                url
                    ?
                    <Link to={url}>
                        Back
                    </Link>
                    : null
            }
            
        </nav>
    )
}

export default Breadcrumbs


interface IBreadcrums {
    name:string;
    url:string;
    icon: any
}