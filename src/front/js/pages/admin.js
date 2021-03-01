import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

export const Admin = () => {
	console.log("Imansd");
	return (
		<Container>
			<Row>
				<Col>
					<h1>PetCloud</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<InputGroup className="mb-3">
						<FormControl placeholder="Id mascota" aria-label="pet id" aria-describedby="search-addon" />
						<InputGroup.Append>
							<InputGroup.Text id="search-addon">&#128269;</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	);
};
