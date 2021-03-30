import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Form, Image } from "react-bootstrap";
import { Context } from "../../store/appContext";

// export const PetInformation = ({ name, identifier, gender, birthDate, petOwner, address, phone, email }) => {
export const PetInformation = () => {
	const { store, actions } = useContext(Context);
	// const [pets, setPets] = useState({});

	useEffect(async () => {
		await actions.getPetInformation("PET-001");

		// setPets(store.pets);
	}, []);

	// const name = "";
	// const identifier = "";
	// const gender = "";
	// const birthDate = "";
	// const petOwner = "";
	// const address = "";
	// const phone = "";
	// const email = "";

	// name = JSON.stringify(store.pets.name);
	// identifier = JSON.stringify(store.pets.identifier);
	// gender = store.pets.gender;
	// birthDate = store.pets.birthDate;
	// petOwner = JSON.stringify(store.pets.contact);
	// address = JSON.stringify(store.pets.contact);
	// phone = JSON.stringify(store.pets.contact);
	// email = JSON.stringify(store.pets.contact);
	// // console.log(name, "---> name");
	// console.log(gender, "---> gender");
	// console.log(identifier, "---> identifier");
	// console.log(birthDate, "---> birthDate");
	// console.log(petOwner, "---> petOwner");

	// {"name":"Cachupin","identifier":"12345678","gender":"female","birthDate":"2010-03-23","petOwner":"Francisco","address":"Buenas Peras 123, Calama, Chile","phone":"998765432","email":"francisco@gmail.com"}

	return (
		<Container>
			<span>{JSON.stringify(store.pets)}</span>
			<Row className="text-center">
				<Col xs={12} md={12}>
					<h2 className="nombre mt-4">Hola {name} </h2>
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
										<Form.Control type="text" name="name" value={store.pets.name} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextIdentifier">
									<Form.Label column sm="2">
										Mi número de CHIP:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" name="identifier" value={store.pets.identifier} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextWeight">
									<Form.Label column sm="2">
										Género:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" name="gender" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextWeight">
									<Form.Label column sm="2">
										Fecha de Nacimiento:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" name="birthDate" />
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
										<Form.Control type="text" name="usepetOwner" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextAddress">
									<Form.Label column sm="2">
										Vive en:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="address" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextPhone">
									<Form.Label column sm="2">
										Su teléfono es:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="phone" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Su mail:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="email" />
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
