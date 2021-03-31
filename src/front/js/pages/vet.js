import React, { useState, useContext } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/vet.scss";

export const Vet = () => {
	const { store, actions } = useContext(Context);

	const id = React.createRef();
	let currentId = "";

	const [redirect, setRedirect] = useState(false);

	const handleId = () => {
		if (id != null) currentId = id.current.value;
		console.log(currentId);
		setRedirect(true);
	};
	return (
		<Container className="search-form">
			{redirect ? <Redirect to="/id" /> : ""}
			<Row className="text-center my-5">
				<Col xs={12} className="mb-3">
					<h3>Buscar por chip de la mascota</h3>
				</Col>
				<Col xs={6} className="mx-auto">
					<InputGroup className="mb-3">
						<FormControl
							ref={id}
							placeholder="Chip mascota"
							aria-label="pet id"
							aria-describedby="search-addon1"
						/>
						<InputGroup.Append>
							<InputGroup.Text onClick={handleId} id="search-addon1">
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
