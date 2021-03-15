import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export const ForgottenPass = () => {
	return (
		<Container className="registerForms">
			<Form autocomplete="off" className="p-5 text-center">
				<Form.Text className="m-3">Ingresa tu email para recuperar tu contraseña</Form.Text>
				<Form.Control type="email" placeholder="tuemail@petcloud.com" className="m-3 text-center" />
				<Button className="petBtn my-1">Recuperar</Button>
			</Form>
		</Container>
	);
};
