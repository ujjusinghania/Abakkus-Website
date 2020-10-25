import React, { Component } from "react";

import { Heading, Tile, Section, Box, Table } from "react-bulma-components";

import AbakkusNavbar from "./AbakkusNavbar.js";
import AbakkusFooter from "./AbakkusFooter.js";

class AbakkusProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getTopTenStocks(abakkusProduct) {
		if (Object.keys(abakkusProduct.top_10).length !== 0) {
			return (
				<Tile kind="parent" size={5}>
					<Tile renderAs="article" kind="child" notification color="light">
						<div className="content">
							<Heading>Top Ten</Heading>
							<div className="content">
								<Table bordered={true}>
									<thead>
										<tr>
											<th>Stock Name</th>
											<th>Percentage</th>
										</tr>
									</thead>
									<tbody>
										{Object.keys(abakkusProduct.top_10).map((key, index) => (
											<tr>
												<td>{key}</td>
												<td>{abakkusProduct.top_10[key]}</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
						</div>
					</Tile>
				</Tile>
			);
		}
		return;
	}

	render() {
		const abakkusProduct = this.props.jsonObj;
		console.log(Object.keys(abakkusProduct.top_10));
		return (
			<div>
				<AbakkusNavbar />
				<div style={{ marginTop: "32px" }}>
					<Section>
						<Box style={{ marginLeft: "32px", marginRight: "32px" }}>
							<Tile kind="ancestor" vertical>
								<Tile kind="parent" style={{ marginBottom: '-16px'}}>
									<Tile kind="parent">
										<Tile
											renderAs="article"
											kind="child"
											notification
											color="danger"
										>
											<Heading>{abakkusProduct.name}</Heading>
										</Tile>
									</Tile>
								</Tile>
								<Tile kind="parent">
									<Tile vertical>
										<Tile>
											<Tile kind="parent" vertical>
												<Tile
													renderAs="article"
													kind="child"
													notification
													color="primary"
												>
													<Heading subtitle>{abakkusProduct.brief}</Heading>
												</Tile>
												<Tile
													renderAs="article"
													kind="child"
													notification
													color="warning"
												>
													<Heading>Fund Manager</Heading>
													<Heading subtitle>
														{abakkusProduct.fund_manager}
													</Heading>
												</Tile>
												<Tile
													renderAs="article"
													kind="child"
													notification
													color="warning"
												>
													<Heading>Benchmark</Heading>
													<Heading subtitle>{abakkusProduct.benchmark}</Heading>
												</Tile>
												<Tile
													renderAs="article"
													kind="child"
													notification
													color="warning"
												>
													<Heading>Custodian</Heading>
													<Heading subtitle>{abakkusProduct.custodian}</Heading>
												</Tile>
											</Tile>
											<Tile kind="parent" vertical>
												<Tile
													renderAs="article"
													kind="child"
													notification
													color="info"
												>
													<Heading>Strategy</Heading>
													<Heading subtitle>
														{abakkusProduct.strategy.map((item, index) => (
															<li>{item}</li>
														))}
													</Heading>
												</Tile>
											</Tile>
										</Tile>
									</Tile>
									{this.getTopTenStocks(abakkusProduct)}
								</Tile>
								<Tile kind="parent" style={{ marginTop: '-16px'}}>
									<Tile kind="parent">
										<Tile
											renderAs="article"
											kind="child"
											notification
											color="success"
										>
											<div className="content">
												<Heading subtitle>Disclaimer</Heading>
												<p>{abakkusProduct.disclaimer}</p>
											</div>
										</Tile>
									</Tile>
								</Tile>
							</Tile>
						</Box>
					</Section>
				</div>
				<AbakkusFooter />
			</div>
		);
	}
}

export default AbakkusProduct;
