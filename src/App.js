import React, { Component, } from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, combineReducers, } from 'redux';


import reducers from './reducers';

const store = createStore(reducers);

export default props => {
    
    return(
      <Provider store={store}>
        <Routes />
      </Provider>
      );
    }   
