import React, { Component } from 'react';

import { Card, Media, Image, Content, Heading } from 'react-bulma-components';

class AbakkusPeopleCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
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