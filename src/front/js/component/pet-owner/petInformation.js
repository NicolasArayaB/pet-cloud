import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Form, Image } from "react-bootstrap";

export const PetInformation = () => {
	return (
		<Container-fluid>
			<Row className="text-center">
				<Col xs={12} md={12}>
					<h2 className="nombre mt-4">Hola @Name</h2>
					<Image
						src="https://images.all-free-download.com/images/graphiclarge/dog_icons_vector_281192.jpg"
						style={{ height: "200px" }}
						roundedCircle
					/>
				</Col>
			</Row>
			<Row className="text-center">
				<Col xs={12} md={12}>
					<h3
						className="nombre mt-4 text-center"
						style={{
							color: "white",
							backgroundColor: "#66B9BF"
						}}>
						Datos de mi Mascota
					</h3>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={12}>
					<ListGroup className="list-group-flush" style={{ color: "#E37222" }}>
						<ListGroupItem>
							<Form>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Mi nombre es:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" placeholder="Cachupin" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Mi número de CHIP:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" placeholder="123456789" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Peso:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" placeholder="20 Kg" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Mi fecha de último control:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" placeholder="10-03-2021" />
									</Col>
								</Form.Group>
							</Form>
						</ListGroupItem>
					</ListGroup>
					<hr />
					<ListGroup className="list-group-flush" style={{ color: "#E37222" }}>
						<ListGroupItem>
							<Form>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Mi Dueño es:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" placeholder="Fernando Perez" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Vive en:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" placeholder="Los Leones 123, Providencia, Santiago" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Su teléfono de contacto es:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" placeholder="990123434" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Su mail:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" placeholder="fernando@gmail.com" />
									</Col>
								</Form.Group>
							</Form>
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</Container-fluid>
	);
};
