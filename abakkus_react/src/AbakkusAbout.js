import React, { Component } from 'react';

import { Heading, Container } from 'react-bulma-components';

import AbakkusNavbar from './AbakkusNavbar.js';
import AbakkusFooter from './AbakkusFooter.js';

class AbakkusAbout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AbakkusNavbar />
                <div style={{ marginTop: '32px' }}>
                    <Container>
                        <p class="is-size-2">Our Story</p>
                        <br />
                        <p class="is-size-3">Why the name Abakkus?</p><br />
                        <p>The name Abakkus is inspired by the English word, Abacus, which refers to a “simple instrument used for computing”.</p><br />
                        <p>This ideology has shaped our beliefs. We like to:</p><br />
                        <ol>
                            <li>Keep things simple.</li>
                            <li>Believe in the basics.</li>
                            <li>Focus on the fundamentals and numbers.</li>
                        </ol><br />
                        <p>On the other hand, our logo, inspired by squirrels, represents six key things:</p><br />
                        <ol>
                            <li>Flexibility</li>
                            <li>Energy</li>
                            <li>Passion</li>
                            <li>Balance</li>
                            <li>Trust</li>
                            <li>Accumulation</li>
                        </ol>
                        <br />
                    </Container>
                </div>
                <AbakkusFooter />
            </div>
        )
    }
}

export default AbakkusAbout;