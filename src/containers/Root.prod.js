import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from '../routes'

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>Hello World!</div>
                <Router>
                    <Link to="/home"></Link>
                </Router>
                <Router>
                    <Routes />
                </Router>
            </Provider>
        );
    }
}