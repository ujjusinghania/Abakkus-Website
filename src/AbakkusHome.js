import React, { Component } from "react";
import { Helmet } from 'react-helmet'

import { Image } from "react-bulma-components";

import AbakkusNavbar from "./AbakkusNavbar.js";
import AbakkusFooter from "./AbakkusFooter.js";
import AbakkusAdvisory from "./AbakkusAdvisory.js";

import "./css/Abakkus.css";

class AbakkusHome extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Abakkus Homepage</title>
				</Helmet>
				<AbakkusNavbar />
				<Image
					src="https://www.dropbox.com/s/yf2s9kuzm1y78b1/Abakkus%20Homepage.jpeg?raw=1"
					className="FullPageBackground"
				/>
				<AbakkusFooter />				

				
			</div>
		);
	}
}

export default AbakkusHome;
