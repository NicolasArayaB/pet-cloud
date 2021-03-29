import React, { useState, useContext } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/vet.scss";

export const Vet = () => {
	const { store, actions } = useContext(Context);

	const id = React.createRef();
	const rut = React.createRef();
	const [redirect, setRedirect] = useState(false);

	const handleRut = () => {
		actions.getPetByRut(rut.current.value);
	};

	const handleId = () => {
		actions.getPetById(id.current.value);
		console.log(store.pet);
		setRedirect(true);
	};
	return (
		<Container className="search-form">
			{redirect ? <Redirect to="/vet/id" /> : ""}
			<Row className="text-center my-5">
				<Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} className="mb-3">
					<h3>Buscar por el id de la mascota</h3>
				</Col>
				<Col xs={{ span: 12, order: 3 }} md={{ span: 6, order: 2 }} className="mb-3">
					<h3>Buscar por rut de su dueño</h3>
				</Col>
				<Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 3 }}>
					<InputGroup className="mb-3">
						<FormControl
							ref={id}
							placeholder="Id mascota"
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
				<Col xs={{ span: 12, order: 4 }} md={{ span: 6, order: 4 }}>
					<InputGroup className="mb-3">
						<FormControl
							ref={rut}
							placeholder="12345678-9"
							aria-label="pet owner"
							aria-describedby="search-addon2"
						/>
						<InputGroup.Append>
							<InputGroup.Text onClick={handleRut} id="search-addon2">
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
