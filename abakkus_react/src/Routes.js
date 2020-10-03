import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import AbakkusHome from './AbakkusHome.js';
import AbakkusAbout from './AbakkusAbout.js';
import AbakkusPeople from './AbakkusPeople.js';
import AbakkusTermsAndConditions from './AbakkusTermsAndConditions.js';
import AbakkusPrivacy from './AbakkusPrivacy.js';
import AbakkusProduct from './AbakkusProduct.js';

const productsJson = {
    "abakkus_growth_fund_I": require('./config/products/abakkus_growth_fund_I.json')
}

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={ AbakkusHome } />
                <Route path='/about' component={ AbakkusAbout } />
                <Route path='/people' component={ AbakkusPeople } />
                <Route path='/termsandconditions' component={ AbakkusTermsAndConditions } />
                <Route path='/privacy' component={ AbakkusPrivacy } />
                <Route path='/product/abakkus_growth_fund_I' render={ () => ( <AbakkusProduct jsonObj = { productsJson["abakkus_growth_fund_I"] } />)} />
            </BrowserRouter>
        )
    }
}

export default Routes;