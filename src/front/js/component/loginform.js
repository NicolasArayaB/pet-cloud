import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<Form autocomplete="off">
			<Form.Control type="email" placeholder="Ingresa tu e-mail" />
			<Form.Group>
				<Form.Control type="password" placeholder="Ingresa tu contraseña" />
				<Form.Text>La contraseña debe tener entre 6 a 12 characteres</Form.Text>
			</Form.Group>
			<Link>¿Olvidaste tu contraseña?</Link>
		</Form>
	);
};

export default Login;
