import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = params => {
	return (
		<Form autocomplete="off">
			<Form.Control
				value={params.email}
				onChange={e => params.setEmail(e.target.value)}
				type="email"
				placeholder="Ingresa tu e-mail"
				className="mb-2"
			/>
			<Form.Group>
				<Form.Control
					value={params.password}
					onChange={e => params.setPassword(e.target.value)}
					type="password"
					placeholder="Ingresa tu contraseña"
				/>
				<Form.Text>La contraseña debe tener entre 6 a 12 characteres</Form.Text>
			</Form.Group>
			<Link to="/pass" onClick={params.close}>
				¿Olvidaste tu contraseña?
			</Link>
		</Form>
	);
};

export default LoginForm;
