// Start up point for the client side application
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/Home';
import Routes from './Routes';
// rehydrate is the fact of injecting new js code on the client (it's the same as render)
ReactDOM.hydrate(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.querySelector('#root')
);
