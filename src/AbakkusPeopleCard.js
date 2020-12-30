import React, { Component } from 'react';

import { Card, Media, Button, Heading } from 'react-bulma-components';

import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

import AbakkusPeoplePanel from './AbakkusPeoplePanel.js';

class AbakkusPeopleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panelOpen: false
        };
    }

    render() {
        return (
            <div>
                <Card onClick={() => { this.setState({'panelOpen': true})} }>
                    <Card.Image src={this.props.img_url} />
                    <Card.Content>
                        <Media>
                            <Media.Item>
                                <Heading size={4}>{this.props.name}</Heading>
                                <Heading subtitle size={6}>{this.props.position}</Heading>
                            </Media.Item>
                        </Media>
                    </Card.Content>
                </Card>
                <Panel
                    isLightDismiss
                    isOpen={this.state.panelOpen}
                    onDismiss={ () => { this.setState({'panelOpen': false})} }
                    type={PanelType.medium}
                >
                    <Button color="danger" style={{ float: "right" }} onClick={ () => { this.setState({'panelOpen': false})} }>Close</Button>
                    <AbakkusPeoplePanel description={this.props.description} name={this.props.name} position={this.props.position} twitter={this.props.twitter} linkedin={this.props.linkedin}/>
                </Panel>
            </div>
        )
    }
}

export default AbakkusPeopleCard;