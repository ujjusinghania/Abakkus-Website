import React, { Component } from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Navbar, Button } from 'react-bulma-components';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

class AbakkusNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'burgerEnabled': false
        }
    }

    render() {
        return (
            <Navbar fixed="top" active={this.state.burgerEnabled} has-shadow={true}>
                <Navbar.Brand style={{background: 'red'}}>
                    <Navbar.Item renderAs="a" href="#" style={{ background: 'blue' }}>

                    </Navbar.Item>
                    <Navbar.Burger onClick={ () => { this.setState({'burgerEnabled': !this.state.burgerEnabled })}}/>
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container position="end">
                        <Navbar.Item>Home</Navbar.Item>
                        <Navbar.Item>About</Navbar.Item>
                        <Navbar.Item>People</Navbar.Item>
                        <Navbar.Item>Blog</Navbar.Item>
                        <Navbar.Item dropdown hoverable href="#">
                            <Navbar.Link arrowless={false}>
                                Investor
                            </Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item href="#">
                                    Investor Login
                                </Navbar.Item>
                                <Navbar.Item href="#">
                                    Dummy Item
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button renderAs='a' href="https://twitter.com/AbakkusInvest" target="_blank" color='info'><strong>Follow Us&nbsp;&nbsp;</strong><FaTwitter /></Button>
                            <Button renderAs='a' href="https://www.linkedin.com/company/abakkus-asset-managers-llp" target="_blank" color='info' style={{ marginLeft: "16px", background: "#0077B5" }}><strong>Follow Us&nbsp;&nbsp;</strong><FaLinkedin /></Button>
                            <Button renderAs='a' href="https://www.facebook.com/abakkusinvest" target="_blank" color='info' style={{ marginLeft: "16px", background: "#3b5998" }}><strong>Follow Us&nbsp;&nbsp;</strong><FaFacebook /></Button>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default AbakkusNavbar;