import React, { useContext, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Form, Image } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const PetInformation = () => {
	const { store, actions } = useContext(Context);

	useEffect(async () => {
		await actions.getPetInformation("002");
	}, []);

	return (
		<Container>
			{/* <span>{JSON.stringify(store.pets)}</span> */}
			<Row className="text-center">
				<Col xs={12} md={12}>
					<h2 className="nombre mt-4">Hola {store.pets.name} </h2>
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
							backgroundColor: "#66B9BF",
							borderRadius: "5px"
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
										<Form.Control type="text" name="gender" value={store.pets.gender} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextWeight">
									<Form.Label column sm="2">
										Fecha de Nacimiento:
									</Form.Label>
									<Col sm="10">
										<Form.Control type="text" name="birthDate" value={store.pets.birthDate} />
									</Col>
								</Form.Group>
							</Form>
						</ListGroupItem>
					</ListGroup>
					<Row className="text-center">
						<Col xs={12} md={12}>
							<h3
								className="nombre mt-4 text-center"
								style={{
									color: "white",
									backgroundColor: "#66B9BF",
									borderRadius: "5px"
								}}>
								Datos de mi dueño
							</h3>
						</Col>
					</Row>
					<ListGroup className="list-group-flush" style={{ color: "#E37222" }}>
						<ListGroupItem>
							<Form>
								<Form.Group as={Row} controlId="formPlaintextuserName">
									<Form.Label column sm="2">
										Mi Dueño es:
									</Form.Label>
									<Col lg="10">
										<Form.Control
											type="text"
											name="userPetOwner"
											value={
												store.pets.petOwner_name +
												" " +
												store.pets.petOwner_father +
												" " +
												store.pets.petOwner_mother
											}
										/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextAddress">
									<Form.Label column sm="2">
										Vive en:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="address" value={store.pets.address} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextPhone">
									<Form.Label column sm="2">
										Su teléfono es:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="phone" value={store.pets.phone} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">
										Su mail:
									</Form.Label>
									<Col lg="10">
										<Form.Control type="text" name="email" value={store.pets.email} />
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
