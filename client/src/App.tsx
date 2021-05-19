import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from './components/home/home';

import Layout from './components/layouts/layout';
import Login from './components/login/login';
import Register from './components/register/register';
import Upload from './components/upload/upload';
import Videos from './components/videos/videos';
import Video from './components/videos/video';
import VideoUpdate from './components/videos/video-update';
import VideoDelete from './components/videos/video-delete';

import AlertState from './context/alert/alertState';
import AuthState from './context/authentication/authState';
import tokenAuth from './config/token';
import RoutePrivate from './components/routes/routes-private';

const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {

  return (
    
      <AuthState>
          <AlertState>
            <Router>
              <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                <Layout>
                  <RoutePrivate exact path="/" component={HomeComponent} />
                  <RoutePrivate exact path="/home" component={HomeComponent} />
                  <RoutePrivate exact path="/my-videos" component={Videos} />
                  <RoutePrivate exact path="/video/:id" component={Video} />
                  <RoutePrivate exact path="/video/update/:id" component={VideoUpdate} />
                  <RoutePrivate exact path="/video/delete/:id" component={VideoDelete} />
                  <RoutePrivate exact path="/upload" component={Upload} />
                </Layout>
              </Switch>
            </Router>
          </AlertState>
      </AuthState>
  )
}

export default App;
