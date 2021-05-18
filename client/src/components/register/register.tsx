import React, {useState, useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/authentication/authContext'

import LogoMain from '../../img/logo-main.svg';
import Logo from '../../img/logo.svg';
import Background from '../../img/bg/bg-01.jpg';

import MsnForm from '../utils/msnForm/msnForm';



const Register = (props:any)=> {
    
    // load contexts

    const alertContext = useContext(AlertContext);
    const { alert, alertShow } = alertContext;
    
    const authContext = useContext(AuthContext);
    const { msg, authenticated, userRegister } = authContext;

    //check user register

    useEffect(() => {

        if(authenticated){
            props.history.push('/home')
        }

        if(msg){
            alertShow(msg.type, msg.msg)
        }

    }, [ msg, authenticated, props.history ] )

	const [user, set_user] = useState({
		name        : '',
		email       : '',
		password    : '',
		password2   : ''
	});

    const {name, email, password, password2} = user;


    // error or success msn

	const onChange = (e:any) => {
		set_user({
			...user,
			[e.target.name]: e.target.value
		})
	}

	
    const onSubmit = (e:any) => {
		e.preventDefault();

        if( name.trim() === '' || email.trim() === '' ||
            password.trim() === '' || password2.trim() === '' )
            {
                alertShow('succes', 'All fields are required');
            }else{

				if(password.length >= 6 ){
                    
                    if( password === password2 ) {

                        userRegister({
                            name,
                            email,
                            password
                        })

                    }else{
                        alertShow('succes', 'The password are not equal');
                    }
					
				}else{
                    alertShow('succes', 'Password must have a minimum 6 characters');
				}
				
				
            }
	}
 
  return (
      <> 
        <div className="bg-white px-4 md:px-8 flex items-center Register success!!-contain bg-cover bg-right min-h-screen relative" style={{backgroundImage: `url(${Background})`}}>
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex lg:flex-row w-full md:w-8/12">
                    <div className="w-full flex place-content-center flex-col p-8 lg:p-16 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none rounded-b-lg border-t-default border-l-default border-r-default md:border-r-0 border-b-default border-gray-200" style={{background: 'linear-gradient(#fff 0%, #f5f5f5 100%)'}}>
                    <img className="w-32 mb-8 sm:hidden ml-auto" src={LogoMain} alt="Univision Logo" />
                    
                    <div className="lg:w-9/12 text-left">
                        <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-2 text-c1">Welcome to <br className="flex md:hidden"/>the video platform</h2>
                        <p className="font-medium lg:text-xl mt-4 px-0 text-gray-400">
							This is a test fullstack developer by 
							<Link 	className="underline hover:text-bold text-c2"
									to={{ pathname: "https://bairon.dev"}}
									target="_blank"> @bairondev </Link>
						</p>
                    </div>

                    <form 	className="form__login md:mt-12 lg:w-5/6"
							onSubmit={onSubmit}  >
                        
						<div className="mt-4">
                            <span className="text-c2">Name</span>
                            <input  className="form-input mt-1 block w-full"
                                    id="name"
                                    name="name"
                                    type="text" 
                                    placeholder="Name"
									value={name}
                                    onChange={onChange} />
                        </div>
						
                        <div className="mt-4">
                            <span className="text-c2">Email</span>
                            <input  className="form-input mt-1 block w-full"
                                    id="email"
                                    name="email"
                                    type="text" 
                                    placeholder="Name"
									value={email}
                                    onChange={onChange} />
                        </div>

                        <div className="mt-4">
                            <span className="text-c2">Password</span>
                            <input  className="form-input mt-1 block w-full"
                                    id="password"
                                    name="password"
                                    type="password" 
                                    placeholder="Password"
									value={password}
                                    onChange={onChange} />
                        </div>
                        
                        <div className="mt-4">
                            <span className="text-c2">Confirm Password</span>
                            <input  className="form-input mt-1 block w-full"
                                    id="password2"
                                    name="password2"
                                    type="password" 
                                    placeholder="Password"
									value={password2}
                                    onChange={onChange} />
                        </div>

                        {
                            alert 
                                ? <MsnForm type={alert.type} msg={alert.msg} />
                                : null
                        }
                        

                        <div className="mt-16 flex justify-between items-end">
							<input 	type="submit"
									value="Submit" 
									className="bg-c2 cursor-pointer text-white text-xl font-bold shadow-md  rounded-md py-1 px-8 text-center" />

							<NavLink className="text-gray-500 underline font-medium" to="login">Login</NavLink>
							
                        </div>
                    </form>

                    </div>
                    <div className="text-white hidden sm:flex w-3/6 rounded-br-3xl relative border-t-default border-r-default border-b-default border-gray-200 rounded-tr-lg" style={{background: 'linear-gradient(#f5f5f5 0%, #f5f5f5 55.66%, #f2f2f2 100%)', borderBottomRightRadius:'120px'}}><span className="absolute top-0 w-full flex justify-end items-end p-4">
                        <img className="w-32" src={LogoMain} alt="Univision Logo" />
                        </span>
                        <span className="absolute bottom-0 w-full flex justify-end items-end">
                            <img className="w-36 -mr-10" src={Logo} alt="Univision Logo" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Register
