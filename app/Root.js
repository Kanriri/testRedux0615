'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import Counter from './pages/Counter';

let store = configureStore();

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Counter />
			</Provider>
		);
	}
}
