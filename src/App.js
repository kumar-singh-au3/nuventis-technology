import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Users from './Containers/Users';
import Posts from './Containers/Posts';
import Albums from './Containers/Albums';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';

export default ()=>{
    return (
      <div className="App">     
       <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/users/:userId/posts" component={Posts}/>
            <Route exact path="/users/:userId/albums" component={Albums}/>
          <Route path="/"  component={Users} />
            
            <Redirect to="/"/>
                  
          </Switch> 
        </BrowserRouter>   
      </Provider>
      </div>
    );
  }
