import React, { Component } from 'react';

import AbakkusNavbar from './AbakkusNavbar.js';

const peopleData = require('./peopleConfig.json');

class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ background: '#123525' }}>
                <AbakkusNavbar />
                <p>Homepage is selected. This is about to become the best looking website in the Indian Hedgefund sector.</p>
            </div>
        )
    }
}

export default AboutPage;