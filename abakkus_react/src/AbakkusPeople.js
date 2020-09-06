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
    }

    returnRows() {
        while (peopleConfig.length % 4 != 0) {
            peopleConfig.push({});
        }

        var peoplePage = [];

        for (let peopleIndex = 0; peopleIndex < peopleConfig.length; peopleIndex += 4) {
            peoplePage.push(this.getPeopleCards(peopleConfig.slice(peopleIndex, peopleIndex + 4)))
        }

        return peoplePage;
    }

    getPeopleCards(rowPeople) {
        var rowPeopleCards = [];
        rowPeople.map((person, index) => {
            if (person.name === undefined) {
                rowPeopleCards.push(<Columns.Column style={{ margin: '16px' }} />);
            }
            else {
                rowPeopleCards.push(
                    <Columns.Column style={{ margin: '16px' }}>
                        <AbakkusPeopleCard name={person.name} position={person.position} description={person.description} img_url={person.img_url} />
                    </Columns.Column>
                    )
            }
        })
        return (
            <Columns style = {{ marginTop: '24px', marginRight: '24px', marginLeft: '24px' }}>
            { 
                rowPeopleCards.map((personCard) => {
                    return personCard;
                })
            }
            </Columns>
        );
    }

    render() {
        return (
            <div>
                <AbakkusNavbar />
                {
                    this.returnRows()
                }
            </div>
        )
    }
}

export default AbakkusPeople;