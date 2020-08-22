import React, { Component } from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Navbar } from 'react-bulma-components';

class AbakkusNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu >
                    <Navbar.Container>
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
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default AbakkusNavbar;