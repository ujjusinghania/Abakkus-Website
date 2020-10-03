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
				<Image src="https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="FullPageBackground"/>
				<AbakkusFooter />
			</div>
		);
	}
}

export default AbakkusHome;
