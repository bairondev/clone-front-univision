import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const RoutePrivate = ({ component: Component, ...props  }:any) => {

    const authContext = useContext(AuthContext);
    const { authenticated, load, userAuthenticated} = authContext;

    useEffect(() => {
        userAuthenticated();
        // eslint-disable-next-line
    }, []);

    return ( 
        <Route { ...props } render={ props => !authenticated && !load ?  (
            <Redirect to="/login" />
        )  : (
            <Component {...props} />
        ) } />

     );
}
 
export default RoutePrivate;