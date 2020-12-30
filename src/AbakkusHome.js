import React, { Component } from "react";

import { Image } from "react-bulma-components";

import AbakkusNavbar from "./AbakkusNavbar.js";
import AbakkusFooter from "./AbakkusFooter.js";

import "./css/Abakkus.css";

class AbakkusHome extends Component {
	render() {
		return (
			<div>
				<AbakkusNavbar />
				<Image src="https://www.dropbox.com/s/yf2s9kuzm1y78b1/Abakkus%20Homepage.jpeg?raw=1" className="FullPageBackground"/>
				<AbakkusFooter />
			</div>
		);
	}
}

export default AbakkusHome;
