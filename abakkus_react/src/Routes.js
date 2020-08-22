import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AboutPage from './About.js';

class Routes extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <BrowserRouter forceRefres={true}>
                <Route path='/' component={ AboutPage } />
            </BrowserRouter>
        )
    }
}

export default Routes;