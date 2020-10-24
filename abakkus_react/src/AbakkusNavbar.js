import React, { Component } from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Navbar, Button } from 'react-bulma-components';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const navbarBlogConfig = require('./config/navbarBlogConfig.json');

class AbakkusNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'burgerEnabled': false
        }
    }

    render() {
        return (
            <Navbar fixed="top" active={this.state.burgerEnabled} style={{ boxShadow: "0px 0.5px 8px rgba(0,0,0,0.2)" }}>
                <Navbar.Brand style={{background: 'red'}}>
                    <Navbar.Item renderAs="a" href="#" style={{ background: 'blue' }}>

                    </Navbar.Item>
                    <Navbar.Burger onClick={ () => { this.setState({'burgerEnabled': !this.state.burgerEnabled })}}/>
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container position="end">
                        <Navbar.Item href="/">Home</Navbar.Item>
                        <Navbar.Item href="/about">About</Navbar.Item>
                        <Navbar.Item href="/people">People</Navbar.Item>
                        <Navbar.Item dropdown hoverable href="#">
                            <Navbar.Link arrowless={false}>
                                Insights
                            </Navbar.Link>
                            <Navbar.Dropdown>
                                {
                                    navbarBlogConfig.map((blogItem, key) => {
                                        return <Navbar.Item href={blogItem['urlLink']}>{ blogItem['navbarText'] }</Navbar.Item>
                                    })
                                }
                            </Navbar.Dropdown>
                        </Navbar.Item>
                        <Navbar.Item dropdown hoverable href="#">
                            <Navbar.Link arrowless={false}>
                                Products
                            </Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item href="#" renderAs='p'>
                                    Alternative Investment Funds
                                </Navbar.Item>
                                <Navbar.Divider/>
                                <Navbar.Item href="/product/abakkus_growth_fund_I">
                                    Abakkus Growth Fund - I
                                </Navbar.Item>
                                <Navbar.Item href="#">
                                    Abakkus Emerging Opportunities Fund - I 
                                </Navbar.Item>
                                <Navbar.Divider/>
                                <Navbar.Item href="#" renderAs='p'>
                                    Portfolio Management Services
                                </Navbar.Item>
                                <Navbar.Divider/>
                                <Navbar.Item href="#">
                                    Abakkus All Cap Approach
                                </Navbar.Item>
                                <Navbar.Item href="#">
                                    Abakkus Emerging Opportunities Fund - I 
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
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