import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Contact = () => {
	return (
		<Container>
			<Row className="my-5 mx-5 mr-5">
				<Col xs="12" md="6">
					<Form>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label style={{ marginTop: "20px" }}>Selecciona tu perfil</Form.Label>
							<Form.Control as="select">
								<option>Soy Veterinario</option>
								<option>Soy Dueño de mascota</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="validationCustom02">
							<Form.Label>Tu Nombre y Apellido</Form.Label>
							<Form.Control required type="text" placeholder="Nombre y Apellido" />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Label>Tu Email</Form.Label>
							<Form.Control type="email" placeholder="nombre@ejemplo.com" required />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Cuentanos de Tu problema</Form.Label>
							<Form.Control as="textarea" rows={3} required />
						</Form.Group>
						<Button variant="outline-primary" size="lg" block type="submit">
							Enviar
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
