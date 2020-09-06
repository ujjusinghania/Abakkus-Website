import React, { Component } from 'react';

import { Card, Media, Image, Content, Heading } from 'react-bulma-components';

import AbakkusPeoplePanel from './AbakkusPeoplePanel.js';

class AbakkusPeopleCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <Card onClick={ () => { console.log('Hello World') }}>
                <Card.Image size="4by3" src={this.props.img_url} />
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>{this.props.name}</Heading>
                            <Heading subtitle size={6}>{this.props.position}</Heading>
                        </Media.Item>
                    </Media>
                </Card.Content>
            </Card>
        )
    }
}

export default AbakkusPeopleCard;