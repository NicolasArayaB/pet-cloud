import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

export const Admin = () => {
	console.log("Imansd");
	return (
		<Container>
			<br /><br /><br /><br /><br /><br />  {/* cambiar a una solucion más "elegante" de centrar el container */}
			<Row className="text-center my-5">
				<Col>
					<h3>Buscar por el id de la mascota</h3>
				</Col>
				<Col>
					<h3>Buscar por su dueño</h3>
				</Col>
			</Row>
			<Row className="my-5">
				<Col>
					<InputGroup className="mb-3">
						<FormControl placeholder="Id mascota" aria-label="pet id" aria-describedby="search-addon1" />
						<InputGroup.Append>
							<InputGroup.Text id="search-addon1">&#128269;</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Col>
				<Col>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Nombre completo"
							aria-label="pet owner"
							aria-describedby="search-addon2"
						/>
						<InputGroup.Append>
							<InputGroup.Text id="search-addon2">&#128269;</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	);
};
