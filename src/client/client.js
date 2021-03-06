// Start up point for the client side application
import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import Home from './components/Home';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
// rehydrate is the fact of injecting new js code on the client (it's the same as render)
import reducers from './reducers';

const axiosInstance = axios.create({
	baseURL: '/api'
});

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
