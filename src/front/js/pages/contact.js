import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const Contact = () => {
	const { actions } = useContext(Context);

	const [validated, setValidated] = useState(false);
	const [redirect] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.target;
		const role = form.roleFormControl.value;
		const name = form.nameFormControl.value;
		const email = form.emailFormControl.value;
		const message = form.messageFormControl.value;

		const ShowAlert = Swal.mixin({
			toast: true,
			position: "bottom",
			showConfirmButton: true,
			confirmButtonColor: "#EEAA7B",
			cancelButtonText: "Ok",
			timer: 4000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			}
		});

		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			setValidated(true);
			actions.sendContactMsg(name, email, message, role);
			ShowAlert.fire({
				icon: "success",
				title: "Muchas gracias, responderemos tu consulta a la brevedad"
			});
		}
	};

	return (
		<section className="py-5 contact">
			<Container>
				{redirect ? <Redirect to="/" /> : ""}
				<Row className="justify-content-center">
					<Col xs={12} md={6}>
						<h2 className="altHeader">Contáctanos</h2>
						<div className="p-3 mt-5 contactContainer">
							<Form noValidate validated={validated} onSubmit={handleSubmit}>
								<Form.Group controlId="roleFormControl">
									<Form.Label className="contactLabel">Selecciona tu perfil</Form.Label>
									<Container>
										<Row>
											<Col>
												<Form.Check
													type="radio"
													label="Soy Médico Veterinario"
													name="inlineRadioOptions"
													value="Soy Médico Veterinario"
												/>
											</Col>
											<Col>
												<Form.Check
													type="radio"
													label="Soy Dueño de mascota"
													name="inlineRadioOptions"
													value="Soy Dueño de mascota"
												/>
											</Col>
										</Row>
									</Container>
								</Form.Group>
								<Form.Group controlId="nameFormControl">
									<Form.Control
										name="Name"
										required
										type="text"
										placeholder="Ingresa tu Nombre y Apellido"
									/>
								</Form.Group>
								<Form.Group controlId="emailFormControl">
									<Form.Control
										name="email"
										type="email"
										placeholder="Ingresa tu mail: nombre@ejemplo.com"
										required
									/>
								</Form.Group>
								<Form.Group controlId="messageFormControl">
									<Form.Label className="contactLabel">Cuéntanos de tu problema</Form.Label>
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
