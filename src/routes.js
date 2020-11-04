import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/User/Home';
import Links from './Components/User/Links';
import Post from './Components/User/Post';
import Resources from './Components/User/Resources';
import About from './Components/User/About';
import Auth from './Components/Admin/Auth';
import Dashboard from './Components/Admin/Dashboard';
import Manage from './Components/Admin/Manage';
import NewPost from './Components/Admin/NewPost';

export default(
    <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/about' component={About}/>
        <Route path = '/links' component={Links}/>
        <Route path = '/resources' component={Resources}/>
        <Route path = '/post/:postid' component={Post}/>
        <Route exact path = '/admin' component={Auth}/>
        <Route path = '/admin/dashboard' component={Dashboard}/>
        <Route path = '/admin/manage' component={Manage}/>
        <Route path = '/admin/new' component={NewPost}/>
    </Switch>
)
