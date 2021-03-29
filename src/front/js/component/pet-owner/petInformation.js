import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Form, Image } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";

export const PetInformation = (name, gender, identifier, birthDate) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPetInformation("PET-001");
	}, []);

	name = store.pets.name;
	gender = store.pets.gender;
	identifier = store.pets.identifier;
	birthDate = store.pets.birthDate;
	console.log(name, "---> name");
	console.log(gender, "---> gender");
	console.log(identifier, "---> identifier");
	console.log(birthDate, "---> birthDate");
	// address = JSON.stringify(store.pets.contact.address);
	// phone = JSON.stringify(store.pets.contact.value);
	// email = JSON.stringify(store.pets.contact.value);

	return (
		<Container>
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
						Mis Datos
					</h3>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={12}>
					<ListGroup className="list-group-flush" style={{ color: "#E37222" }}>
						<ListGroupItem>
							<Form>
								<Form.Group as={Row} controlId="formPlaintextName">
									<Form.Label column sm="2">
										Mi nombre es:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" name="name" value={name} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextIdentifier">
									<Form.Label column sm="2">
										Mi número de CHIP:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" name="identifier" value={identifier} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextWeight">
									<Form.Label column sm="2">
										Gender:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" name="gender" value={gender} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextWeight">
									<Form.Label column sm="2">
										Fecha de Nacimiento:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" name="BirthDate" value={birthDate} />
									</Col>
								</Form.Group>
							</Form>
						</ListGroupItem>
					</ListGroup>
					<hr />
					<ListGroup className="list-group-flush" style={{ color: "#E37222" }}>
						<ListGroupItem>
							<Form>
								<Form.Group as={Row} controlId="formPlaintextuserName">
									<Form.Label column sm="2">
										Mi Dueño es:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="username" value={name} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextAddress">
									<Form.Label column sm="2">
										Vive en:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="address" value={name} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextPhone">
									<Form.Label column sm="2">
										Su teléfono de contacto es:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="phone" value={name} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Su mail:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="email" value={name} />
									</Col>
								</Form.Group>
							</Form>
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};
