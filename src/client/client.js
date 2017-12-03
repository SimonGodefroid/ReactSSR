// Start up point for the client side application
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// rehydrate is the fact of injecting new js code on the client (it's the same as render)
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
