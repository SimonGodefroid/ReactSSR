import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';
const App = ({ route }) => {
	return (
		<div>
			<Header />
			{renderRoutes(route.routes)}
		</div>
	);
};

export default {
	component: App,
	loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
	// if no curly braces and one line, no need for return
};
