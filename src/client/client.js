// Start up point for the client side application
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import Home from './components/Home';
import Routes from './Routes';
// rehydrate is the fact of injecting new js code on the client (it's the same as render)

const store = createStore(reducers, {}, applyMiddleware(thunk));
ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
