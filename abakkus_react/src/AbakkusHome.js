import React, { Component } from 'react';

import AbakkusNavbar from './AbakkusNavbar.js';
import AbakkusFooter from './AbakkusFooter.js';

class AbakkusHome extends Component {
    render() {
        return (
            <div>
                <AbakkusNavbar />
                <AbakkusFooter />
            </div>
        );
    }
}

export default AbakkusHome;