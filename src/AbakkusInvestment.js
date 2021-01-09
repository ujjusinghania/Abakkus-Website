import React, { Component } from "react";

import { Section, Heading, Container } from "react-bulma-components";

import AbakkusNavbar from "./AbakkusNavbar.js";
import AbakkusFooter from "./AbakkusFooter.js";

class AbakkusInvestment extends Component {
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
							<Heading>Investment Philosophy</Heading>
							<p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eros sed ante suscipit feugiat. Mauris vehicula, libero eu consectetur sollicitudin, est diam fringilla neque, sed tincidunt libero ex id dolor. Vestibulum scelerisque urna elit, vel fringilla arcu vehicula eget. Ut ipsum justo, consequat at velit et, ornare sollicitudin turpis. Aenean euismod leo velit, in luctus magna consequat in. Suspendisse potenti. Suspendisse nisl risus, gravida at magna et, facilisis maximus ante. Duis eget purus a erat facilisis commodo in convallis ante. Duis suscipit, sapien ac ullamcorper elementum, nulla sem malesuada metus, posuere pretium purus urna sed justo. Proin ex ipsum.
                            </p>
						</Container>
					</Section>
                    <Section>
						<Container
							fluid
							style={{ marginLeft: "32px", marginRight: "32px" }}
						>
							<Heading>MEETS Framework</Heading>
							<p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eros sed ante suscipit feugiat. Mauris vehicula, libero eu consectetur sollicitudin, est diam fringilla neque, sed tincidunt libero ex id dolor. Vestibulum scelerisque urna elit, vel fringilla arcu vehicula eget. Ut ipsum justo, consequat at velit et, ornare sollicitudin turpis. Aenean euismod leo velit, in luctus magna consequat in. Suspendisse potenti. Suspendisse nisl risus, gravida at magna et, facilisis maximus ante. Duis eget purus a erat facilisis commodo in convallis ante. Duis suscipit, sapien ac ullamcorper elementum, nulla sem malesuada metus, posuere pretium purus urna sed justo. Proin ex ipsum.
                            </p>
						</Container>
					</Section>
                    <Section>
						<Container
							fluid
							style={{ marginLeft: "32px", marginRight: "32px" }}
						>
							<Heading>Opportunity Matrix</Heading>
							<p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate eros sed ante suscipit feugiat. Mauris vehicula, libero eu consectetur sollicitudin, est diam fringilla neque, sed tincidunt libero ex id dolor. Vestibulum scelerisque urna elit, vel fringilla arcu vehicula eget. Ut ipsum justo, consequat at velit et, ornare sollicitudin turpis. Aenean euismod leo velit, in luctus magna consequat in. Suspendisse potenti. Suspendisse nisl risus, gravida at magna et, facilisis maximus ante. Duis eget purus a erat facilisis commodo in convallis ante. Duis suscipit, sapien ac ullamcorper elementum, nulla sem malesuada metus, posuere pretium purus urna sed justo. Proin ex ipsum.
                            </p>
						</Container>
					</Section>
				</div>
				<AbakkusFooter />
			</div>
		);
	}
}

export default AbakkusInvestment;
