import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../../styles/login.scss";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
// import { Form } from "react-validation/build/form";

export const RegisterView = () => {
	const [firstName, setFirstName] = useState("");
	const [fatherFamilyName, setFatherFamilyName] = useState("");
	const [motherFamilyName, setMotherFamilyName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { actions } = useContext(Context);

	const required = value => {
		if (!value) {
			return (
				<div className="alert alert-danger" role="alert">
					Este campo es requerido
				</div>
			);
		}
	};
	const validPassword = value => {
		if (value.length > 6 || value.length < 12) {
			return (
				<div className="alert alert-danger" role="alert">
					El password debe tener entre 6 y 12 caracteres.
				</div>
			);
		}
	};
	const clickHandler = e => {
		e.preventDefault();
		actions.registerUser({
			firstName: firstName,
			fatherFamilyName: fatherFamilyName,
			motherFamilyName: motherFamilyName,
			email: email,
			password: password
		});
	};
	const onChangeFirstName = e => {
		const firstName = e.target.value;
		setFirstName(firstName);
	};
	const onChangeFatherFamilyName = e => {
		const fatherFamilyName = e.target.value;
		setFatherFamilyName(fatherFamilyName);
	};
	const onChangeMotherFamilyName = e => {
		const motherFamilyName = e.target.value;
		setMotherFamilyName(motherFamilyName);
	};
	const onChangeEmail = e => {
		const email = e.target.value;
		setEmail(email);
	};
	const onChangePassword = e => {
		const password = e.target.value;
		setPassword(password);
	};

	return (
		<Container className="registerForms">
			<Form autocomplete="off" className="p-5 text-center">
				<h2>Registrate</h2>
				<Form.Control
					focus
					type="text"
					placeholder="Nombre"
					name="firstName"
					value={firstName}
					onChange={onChangeFirstName}
					className="m-3"
				/>
				<Form.Control
					type="text"
					placeholder="Apellido Paterno"
					name="fatherFamilyName"
					value={fatherFamilyName}
					onChange={onChangeFatherFamilyName}
					className="m-3"
				/>
				<Form.Control
					type="text"
					placeholder="Apellido Materno"
					name="motherFamilyName"
					value={motherFamilyName}
					onChange={onChangeMotherFamilyName}
					className="m-3"
				/>
				<Form.Control
					type="email"
					placeholder="Ingresa tu e-mail"
					name="email"
					value={email}
					onChange={onChangeEmail}
					className="m-3"
				/>
				<Form.Group>
					<Form.Control
						type="password"
						placeholder="Ingresa una contraseña"
						name="password"
						value={password}
						onChange={onChangePassword}
						validations={[required, validPassword]}
						className="pass"
					/>
					<Form.Text className="passText">La contraseña debe tener entre 6 a 12 caracteres</Form.Text>
				</Form.Group>
				<Form.Text className="info mt-5">
					Al hacer clic en Registrate, aceptas nuestras Condiciones, la Política de datos y la Política de
					cookies.
				</Form.Text>
				<Form.Check type="checkbox" label="Soy veterinario" />
				<Button onClick={e => clickHandler(e)} type="submit" className="my-1 petBtn">
					Registrate
				</Button>
			</Form>
		</Container>
	);
};
