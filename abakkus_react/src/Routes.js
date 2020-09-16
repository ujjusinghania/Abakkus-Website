import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import AbakkusAbout from './AbakkusAbout.js';
import AbakkusPeople from './AbakkusPeople.js';
import AbakkusTermsAndConditions from './AbakkusTermsAndConditions.js';
import AbakkusPrivacy from './AbakkusPrivacy.js';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/about' component={ AbakkusAbout } />
                <Route path='/people' component={ AbakkusPeople } />
                <Route path='/termsandconditions' component={ AbakkusTermsAndConditions } />
                <Route path='/privacy' component={ AbakkusPrivacy } />
            </BrowserRouter>
        )
    }
}

export default Routes;