import React, { Component } from "react";

import { Navbar, Container } from "react-bulma-components";

const complaintsConfig = require("./config/complaintsConfig.json");

class AbakkusAdvisory extends Component {
	render() {
		return (
			<Navbar fixed="bottom" style={{ boxShadow: "0px 0.5px 8px rgba(0,0,0,0.2)" }}>
				<Container style={{ marginTop: "16px", marginBottom: "16px" }}>
					<b>
						Investment Advisory - Number of Complaints for{" "}
						{complaintsConfig["monthText"]}
					</b>
					<div>
						<p>
							At the Beginning of the Month:{" "}
							{complaintsConfig["beginningMonth"]}
						</p>
					</div>
					<div>
						<p>Received During the Month: {complaintsConfig["duringMonth"]}</p>
					</div>
					<div>
						<p>
							Resolved During the Month: {complaintsConfig["resolvedMonth"]}
						</p>
					</div>
					<div>
						<p>
							Pending at the End of the Month:{" "}
							{complaintsConfig["pendingMonth"]}
						</p>
					</div>
					<div>
						<p>Reasons for Pendency: {complaintsConfig["reasonsPendency"]}</p>
					</div>
				</Container>
			</Navbar>
		);
	}
}

export default AbakkusAdvisory;
