import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AbakkusAbout from './AbakkusAbout.js';
import AbakkusPeople from './AbakkusPeople.js';

class Routes extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <BrowserRouter>
                <Route path='/about' component={ AbakkusAbout } />
                <Route path='/people' component={ AbakkusPeople } />
            </BrowserRouter>
        )
    }
}

export default Routes;