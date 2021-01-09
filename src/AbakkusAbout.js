import React, { Component } from "react";

import { Section, Heading, Container } from "react-bulma-components";

import AbakkusNavbar from "./AbakkusNavbar.js";
import AbakkusFooter from "./AbakkusFooter.js";
import AbakkusAdvisory from "./AbakkusAdvisory.js";

class AbakkusAbout extends Component {
	render() {
		return (
			<div>
				<AbakkusNavbar />
				<div style={{ marginTop: "48px" }}>
					<Section>
						<Container
							fluid
							style={{ marginLeft: "32px", marginRight: "32px" }}
						>
							<Heading>Our Story</Heading>
							<Heading subtitle>Why the name Abakkus?</Heading>
							<p>
								The name Abakkus is inspired by the English word, Abacus, which
								refers to a “simple instrument used for computing”.<br/>
                                This ideology has shaped our beliefs. We like to:
                                </p>
							<br />
							<ol>
								<li>Keep things simple.</li>
								<li>Believe in the basics.</li>
								<li>Focus on the fundamentals and numbers.</li>
							</ol>
							<br />
							<p>
								On the other hand, our logo, inspired by squirrels, represents
								six key things:
							</p>
							<br />
							<ol>
								<li>Flexibility</li>
								<li>Energy</li>
								<li>Passion</li>
								<li>Balance</li>
								<li>Trust</li>
								<li>Accumulation</li>
							</ol>
							<br />
						</Container>
					</Section>
				</div>
				<AbakkusFooter />				
			</div>
		);
	}
}

export default AbakkusAbout;
