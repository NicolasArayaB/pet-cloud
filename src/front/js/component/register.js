import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Register = () => {
	return (
		<Container className="loginForms">
			<Form autocomplete="off" className="p-5 text-center">
				<h2>Registrate</h2>
				<Form.Control type="text" placeholder="Nombre" className="m-3" />
				<Form.Control type="text" placeholder="Apellido Paterno" className="m-3" />
				<Form.Control type="text" placeholder="Apellido Materno" className="m-3" />
				<Form.Control type="email" placeholder="Ingresa tu e-mail" className="m-3" />
				<Form.Group>
					<Form.Control type="password" placeholder="Ingresa tu contraseña" className="pass" />
					<Form.Text className="passText">La contraseña debe tener entre 6 a 12 caracteres</Form.Text>
				</Form.Group>
				<Form.Text className="info mt-5">
					Al hacer clic en Registrate, aceptas nuestras Condiciones, la Política de datos y la Política de
					cookies.
				</Form.Text>
				<Button type="submit" className="my-1 submitBtn">
					Registrate
				</Button>
			</Form>
		</Container>
	);
};

export default Register;
