import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

const Contact = () => {
	const { actions } = useContext(Context);

	const [validated, setValidated] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [redirect, setRedirect] = useState(false);

	const toggleShowToast = () => setShowToast(!showToast);

	const handleSubmit = event => {
		event.preventDefault();

		const form = event.target;
		const role = form.roleFormControl.value;
		const name = form.nameFormControl.value;
		const email = form.emailFormControl.value;
		const message = form.messageFormControl.value;

		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			setValidated(true);
			actions.sendContactMsg(name, email, message, role);
			toggleShowToast();
		}
	};

	const closeTost = () => {
		toggleShowToast();
		setRedirect(true);
	};

	return (
		<section className="pb-5 contact">
			<Container>
				{redirect ? <Redirect to="/" /> : ""}
				<Row className="justify-content-center">
					<Col xs={12} md={6}>
						<Toast show={showToast} onClose={closeTost} className="mt-4 mx-auto">
							<Toast.Header>
								<strong className="mr-auto">Muchas gracias</strong>
							</Toast.Header>
							<Toast.Body>Responderemos a tu consulta a la brevedad</Toast.Body>
						</Toast>
						<div className="p-3 mt-5 contactContainer">
							<Form noValidate validated={validated} onSubmit={handleSubmit}>
								<Form.Group controlId="roleFormControl">
									<Form.Label className="contactLabel">Selecciona tu perfil</Form.Label>
									<Form.Control className="contactInput" as="select" name="role">
										<option>Soy Veterinario</option>
										<option>Soy Dueño de mascota</option>
									</Form.Control>
								</Form.Group>
								<Form.Group controlId="nameFormControl">
									<Form.Control
										name="Name"
										required
										type="text"
										placeholder="Ingresa tu Nombre y Apellido"
									/>
									<Form.Control.Feedback>Se ve bien eso!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="emailFormControl">
									<Form.Control
										name="email"
										type="email"
										placeholder="Ingresa tu mail: nombre@ejemplo.com"
										required
									/>
									<Form.Control.Feedback>Se ve bien eso!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="messageFormControl">
									<Form.Label className="contactLabel">Cuéntanos de Tu problema</Form.Label>
									<Form.Control name="message" as="textarea" rows={3} required />
								</Form.Group>
								<Button className="petBtn" size="lg" block type="submit">
									Enviar
								</Button>
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
