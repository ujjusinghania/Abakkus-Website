import React, { Component } from 'react';

import AbakkusNavbar from './AbakkusNavbar.js';
import AbakkusPeopleCard from './AbakkusPeopleCard.js';

import { Container, Columns } from 'react-bulma-components';

const peopleConfig = require('./peopleConfig.json');

class AbakkusPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        console.log(document.body.scrollHeight)
    }

    render() {
        return (
            <div>
                <AbakkusNavbar />
                <Columns style={{ margin: '32px', background: '#124812' }}>
                    <Columns.Column style={{ background: '#123525', margin: '16px' }}>
                        <AbakkusPeopleCard name="Ujjwal Singhania" />
                    </Columns.Column>
                    <Columns.Column style={{ background: '#123525', margin: '16px' }}>
                        <AbakkusPeopleCard name="Ujjwal Singhania" />
                    </Columns.Column>
                    <Columns.Column style={{ background: '#123525', margin: '16px' }}>
                        <AbakkusPeopleCard name="Ujjwal Singhania" />
                    </Columns.Column>
                    <Columns.Column style={{ background: '#123525', margin: '16px' }}>
                        <AbakkusPeopleCard name="Ujjwal Singhania" />
                    </Columns.Column>

                </Columns>
            </div>
        )
    }
}

export default AbakkusPeople;