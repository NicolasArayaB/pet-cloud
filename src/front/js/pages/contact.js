import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		const { role, name, email, message } = form;

		event.preventDefault();

		if (form.checkValidity() === false) {
			event.stopPropagation();
		}

		setValidated(true);
		if (validated) actions.sendContactMsg(role.value, name.value, email.value, message.value);
	};
	return (
		<Container>
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label style={{ marginTop: "40px" }}>Selecciona tu perfil</Form.Label>
							<Form.Control as="select" name="role">
								<option>Soy Veterinario</option>
								<option>Soy Dueño de mascota</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="validationCustom02">
							<Form.Control name="Name" required type="text" placeholder="Ingresa tu Nombre y Apellido" />
							<Form.Control.Feedback>Se ve bien eso!</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Control
								name="email"
								type="email"
								placeholder="Ingresa tu mail: nombre@ejemplo.com"
								required
							/>
							<Form.Control.Feedback>Se ve bien eso!</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Cuentanos de Tu problema</Form.Label>
							<Form.Control name="message" as="textarea" rows={3} required />
						</Form.Group>
						<Button className="petBtn" size="lg" block type="submit">
							Enviar
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
