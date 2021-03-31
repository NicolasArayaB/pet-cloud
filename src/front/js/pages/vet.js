import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "../../styles/vet.scss";

export const Vet = () => {
	const [redirect, setRedirect] = useState(false);
	const [chip, setChip] = useState(null);

	return (
		<Container className="search-form">
			{redirect ? <Redirect to={{ pathname: "/vet/id", state: { chip: chip } }} /> : ""}
			<Row className="text-center my-5">
				<Col xs={12} className="mb-3">
					<h3>Buscar por chip de la mascota</h3>
				</Col>
				<Col xs={6} className="mx-auto">
					<InputGroup className="mb-3">
						<FormControl
							onChange={e => setChip(e.target.value)}
							placeholder="Chip mascota"
							aria-label="pet id"
							aria-describedby="search-addon1"
						/>
						<InputGroup.Append>
							<InputGroup.Text onClick={() => setRedirect(true)} id="search-addon1">
								&#128269;
							</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<Button className="petBtn" href="/newPet">
						Nueva Mascota
					</Button>
				</Col>
			</Row>
		</Container>
	);
};
