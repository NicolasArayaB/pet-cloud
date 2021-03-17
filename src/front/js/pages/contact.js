import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Contact = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};
	return (
		<Container>
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label style={{ marginTop: "40px" }}>Selecciona tu perfil</Form.Label>
							<Form.Control as="select">
								<option>Soy Veterinario</option>
								<option>Soy Dueño de mascota</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="validationCustom02">
							<Form.Control required type="text" placeholder="Ingresa tu Nombre y Apellido" />
							<Form.Control.Feedback>Se ve bien eso!</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Control type="email" placeholder="Ingresa tu mail: nombre@ejemplo.com" required />
							<Form.Control.Feedback>Se ve bien eso!</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Cuentanos de Tu problema</Form.Label>
							<Form.Control as="textarea" rows={3} required />
						</Form.Group>
						<Button
							variant="outline-secondary"
							style={{ backgroundColor: "#66b9bf", border: 0 }}
							size="lg"
							block
							type="submit">
							Enviar
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
