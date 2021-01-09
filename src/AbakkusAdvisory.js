import React, { Component } from "react";

import { Navbar, Container, Button } from "react-bulma-components";

const complaintsConfig = require("./config/complaintsConfig.json");

class AbakkusAdvisory extends Component {
	constructor() {
		super();
		this.state = {
			showBottomBar: "block",
			buttonText: "Hide Advisory",
		};

		this.toggleBottomBar = this.toggleBottomBar.bind(this);
		console.log(this.state.showBottomBar)
	}

	toggleBottomBar() {
		if (this.state.showBottomBar === "none") {
			this.setState({ "showBottomBar": "block", "buttonText": "Hide Advisory" });
		} else {
			this.setState({ "showBottomBar": "none", "buttonText": "Show Advisory" });

		}
	}

	render() {
		return (
			<Navbar
				fixed="bottom"
				style={{ boxShadow: "0px 0.5px 8px rgba(0,0,0,0.2)" }}
			>
				<Container style={{ margin: "16px" }}>
					<div style={{ "display": this.state.showBottomBar }}>
						<b>Investment Advisory - Number of Complaints for{" "}
						{complaintsConfig["monthText"]}</b>
					</div>
					<div style={{ "display": this.state.showBottomBar }}>
						<p>
							At the Beginning of the Month:{" "}
							{complaintsConfig["beginningMonth"]}
						</p>
					</div>
					<div style={{ "display": this.state.showBottomBar }}>
						<p>
							Received During the Month: {complaintsConfig["duringMonth"]}
							</p>
					</div>
					<div style={{ "display": this.state.showBottomBar }}>
						<p>
							Resolved During the Month: {complaintsConfig["resolvedMonth"]}
						</p>
					</div>
					<div style={{ "display": this.state.showBottomBar }}>
						<p>
							Pending at the End of the Month:{" "}
							{complaintsConfig["pendingMonth"]}
						</p>
					</div>
					<div style={{ "display": this.state.showBottomBar }}>
						<p>Reasons for Pendency: {complaintsConfig["reasonsPendency"]}</p>
					</div>
					<div style={{ "float": "right"}}>
						<Button color="info" onClick={this.toggleBottomBar}>
							{this.state.buttonText}
						</Button>
					</div>
				</Container>
			</Navbar>
		);
	}
}

export default AbakkusAdvisory;
