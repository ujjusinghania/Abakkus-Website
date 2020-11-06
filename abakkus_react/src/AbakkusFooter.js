import React, { Component } from "react";

import { Footer, Container, Tile, Heading } from "react-bulma-components";

const complaintsConfig = require("./config/complaintsConfig.json");

class AbakkusFooter extends Component {
	render() {
		return (
			<Footer style={{ marginTop: "16px" }}>
				<Container>
					<Tile kind="ancestor">
						<Tile renderAs="article" kind="child" notification color="light">
							<div>
								CIN: AAM-2364
								<br /> PMS SEBI Reg.: INP000006457
								<br /> AIF SEBI Reg.: IN/AIF3/18-19/0550
								<br />
							</div>
						</Tile>
						<Tile renderAs="article" kind="child" notification color="light">
							<Heading subtitle>MUMBAI OFFICE</Heading>
							<div>
								Abakkus Asset Manager LLP
								<br /> 1st Floor, 106, B-Wing,
								<br /> G Block, The Capital,
								<br /> Bandra Kurla Complex,
								<br />
							</div>
						</Tile>
						<Tile renderAs="article" kind="child" notification color="light">
							<Heading subtitle>Contact Us</Heading>
							<div>
								<p href="#!">Phone: +91 22 4884 6600</p>
								<a href="mailto: info@abakkusinvest.com">
									Email: info@abakkusinvest.com
								</a>
							</div>
						</Tile>
					</Tile>
				</Container>
				<Container style={{ marginTop: "64px" }}>
					<Heading subtitle style={{ marginBottom: "32px", textAlign: "center" }}>
						Investment Advisory - Number of Complaints for{" "}
						{complaintsConfig["monthText"]}
					</Heading>
					<Tile kind="ancestor">
						<Tile renderAs="article" kind="child" notification color="light">
							<div>
								<p>
									At the Beginning of the Month:{" "}
									{complaintsConfig["beginningMonth"]}
								</p>
							</div>
						</Tile>
						<Tile renderAs="article" kind="child" notification color="light">
							<div>
								<p>
									Received During the Month: {complaintsConfig["duringMonth"]}
								</p>
							</div>
						</Tile>
						<Tile renderAs="article" kind="child" notification color="light">
							<div>
								<p>
									Resolved During the Month: {complaintsConfig["resolvedMonth"]}
								</p>
							</div>
						</Tile>
						<Tile renderAs="article" kind="child" notification color="light">
							<div>
								<p>
									Pending at the End of the Month:{" "}
									{complaintsConfig["pendingMonth"]}
								</p>
							</div>
						</Tile>
						<Tile renderAs="article" kind="child" notification color="light">
							<div>
								<p>
									Reasons for Pendency: {complaintsConfig["reasonsPendency"]}
								</p>
							</div>
						</Tile>
					</Tile>
				</Container>
				<Container style={{ marginTop: "32px", textAlign: "center" }}>
					LLP - Copyright © 2020 Abakkus Asset Manager LLP | All Rights Reserved
					<br />
					<a href="/termsandconditions">Terms and Conditions</a> |
					<a href="/privacy"> Privacy Policy</a>
				</Container>
			</Footer>
		);
	}
}

export default AbakkusFooter;
