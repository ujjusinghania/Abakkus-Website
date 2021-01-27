import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

import AbakkusNavbar from './AbakkusNavbar.js';
import AbakkusPeopleCard from './AbakkusPeopleCard.js';
import AbakkusFooter from './AbakkusFooter.js';
import AbakkusAdvisory from "./AbakkusAdvisory.js";

import { Columns } from 'react-bulma-components';

const peopleConfig = require('./config/peopleConfig.json');

class AbakkusPeople extends Component {
    returnRows() {
        while (peopleConfig.length % 4 !== 0) {
            peopleConfig.push({});
        }

        var peoplePage = [];
        var firstRow = true;

        for (let peopleIndex = 0; peopleIndex < peopleConfig.length; peopleIndex += 4) {
            peoplePage.push(this.getPeopleCards(peopleConfig.slice(peopleIndex, peopleIndex + 4), firstRow))
            firstRow = false;
        }

        return peoplePage;
    }

    getPeopleCards(rowPeople, firstRow) {
        var rowPeopleCards = [];
        rowPeople.map((person, index) => {
            if (person.name === undefined) {
                rowPeopleCards.push(<Columns.Column style={{ marginLeft: '8px', marginRight: '8px' }} />);
            }
            else {
                rowPeopleCards.push(
                    <Columns.Column style={{ marginLeft: '8px', marginRight: '8px' }}>
                        <AbakkusPeopleCard name={person.name} position={person.position} description={person.description} img_url={person.img_url} twitter={person.twitter} linkedin={person.linkedin}/>
                    </Columns.Column>
                    )
            }
        })
        return (
            <Columns style = {{ marginTop: "16px", marginRight: '16px', marginLeft: '16px' }}>
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
                <Helmet>
					<title>Abakkus People</title>
				</Helmet>
                <AbakkusNavbar />
                {
                    this.returnRows()
                }
                <AbakkusFooter />                
            </div>
        )
    }
}

export default AbakkusPeople;