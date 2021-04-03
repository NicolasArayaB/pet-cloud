import React from "react";
import { Container, Form, Button, Toast } from "react-bootstrap";
import "../../styles/login.scss";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
//import Form from "react-validation";

export const RegisterView = () => {
	const [firstName, setFirstName] = useState("");
	const [fatherFamilyName, setFatherFamilyName] = useState("");
	const [motherFamilyName, setMotherFamilyName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [redirect, setRedirect] = useState(null);
	const { actions } = useContext(Context);

	const toggleShowToast = () => setShowToast(!showToast);

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
		if (value.length < 6 || value.length > 12) {
			return (
				<div className="alert alert-danger" role="alert">
					El password debe tener entre 6 y 12 caracteres.
				</div>
			);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		actions.registerUser({
			firstName: firstName,
			fatherFamilyName: fatherFamilyName,
			motherFamilyName: motherFamilyName,
			email: email,
			password: password
		});

		setValidated(true);
		actions.registerUser(firstName, fatherFamilyName, motherFamilyName, email, password);
		toggleShowToast();
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

	const closeTost = () => {
		toggleShowToast();
		setRedirect(true);
	};

	return (
		<Container className="registerForms">
			{redirect ? <Redirect to="/" /> : ""}
			<Toast show={showToast} onClose={closeTost} delay={3000} autohide className="mt-4 mx-auto">
				<Toast.Header>
					<strong className="mr-auto">Muchas gracias por ser parte de PetCloud</strong>
				</Toast.Header>
				<Toast.Body>Tu registro ha sido exitoso</Toast.Body>
			</Toast>
			<Form
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
				autocomplete="off"
				className="p-5 text-center">
				<h2>Registrate</h2>
				<Form.Control
					type="text"
					placeholder="Nombre"
					name="firstName"
					value={firstName}
					onChange={onChangeFirstName}
					required
					className="m-3"
				/>
				<Form.Control
					type="text"
					placeholder="Apellido Paterno"
					name="fatherFamilyName"
					value={fatherFamilyName}
					onChange={onChangeFatherFamilyName}
					required
					className="m-3"
				/>
				<Form.Control
					type="text"
					placeholder="Apellido Materno"
					name="motherFamilyName"
					value={motherFamilyName}
					onChange={onChangeMotherFamilyName}
					required
					className="m-3"
				/>
				<Form.Control
					type="email"
					placeholder="Ingresa tu e-mail"
					name="email"
					value={email}
					onChange={onChangeEmail}
					required
					className="m-3"
				/>
				<Form.Group>
					<Form.Control
						type="password"
						placeholder="Ingresa una contraseña"
						name="password"
						value={password}
						onChange={onChangePassword}
						required
						className="pass"
					/>
					<Form.Text className="passText">La contraseña debe tener entre 6 a 12 caracteres</Form.Text>
				</Form.Group>
				<Form.Text className="info mt-5">
					Al hacer clic en Registrate, aceptas nuestras Condiciones, la Política de datos y la Política de
					cookies.
				</Form.Text>
				<Form.Check type="checkbox" label="Soy veterinario" />
				<Button type="submit" className="my-1 petBtn">
					Registrate
				</Button>
			</Form>
		</Container>
	);
};
