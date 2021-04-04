import React from "react";
import { Container, Form, Button, Toast } from "react-bootstrap";
import "../../styles/login.scss";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const RegisterView = () => {
	const { actions } = useContext(Context);
	const [firstName, setFirstName] = useState("");
	const [fatherFamilyName, setFatherFamilyName] = useState("");
	const [motherFamilyName, setMotherFamilyName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [toastMsg, setToastMsg] = useState("");
	const [redirect, setRedirect] = useState(null);

	const expresions = {
		password: /^\d{6,12}$/, // between 6 and 12 characters
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	};

	const toggleShowToast = () => setShowToast(!showToast);

	const handleSubmit = e => {
		e.preventDefault();
		if (password.length < 6 || password.length > 12) {
			setToastMsg("El password debe tener entre 6 y 12 carácteres");
			toggleShowToast();
		} else if (email != email) {
			setToastMsg("Digitar formato correcto del mail");
			toggleShowToast();
		} else if (password == password.match(expresions.password) && email == email.match(expresions.email)) {
			actions.registerUser(firstName, fatherFamilyName, motherFamilyName, email, password);
			setToastMsg("Usuario registrado en forma exitosa.");
			setValidated(true);
			toggleShowToast();
		} else {
			e.preventDefault();
			setToastMsg("Todos los campos son requeridos");
			toggleShowToast();
			console.log("You have an error");
		}
	};
	// setValidated(true);
	// actions.registerUser(firstName, fatherFamilyName, motherFamilyName, email, password);
	// toggleShowToast();

	// const onChangeFirstName = e => {
	// 	const firstName = e.target.value;
	// 	setFirstName(firstName);
	// };
	// const onChangeFatherFamilyName = e => {
	// 	const fatherFamilyName = e.target.value;
	// 	setFatherFamilyName(fatherFamilyName);
	// };
	// const onChangeMotherFamilyName = e => {
	// 	const motherFamilyName = e.target.value;
	// 	setMotherFamilyName(motherFamilyName);
	// };
	// const onChangeEmail = e => {
	// 	const email = e.target.value;
	// 	setEmail(email);
	// };
	// const onChangePassword = e => {
	// 	const password = e.target.value;
	// 	setPassword(password);
	// };

	// const closeTost = () => {
	// 	toggleShowToast();
	// 	setRedirect(true);
	// };

	const closeTost = () => {
		toggleShowToast();
		validated ? setRedirect(true) : "";
	};

	return (
		<Container className="registerForms">
			{redirect ? <Redirect to="/" /> : ""}
			<Toast show={showToast} onClose={closeTost} delay={5000} autohide className="mt-4 mx-auto">
				<Toast.Header>
					<strong className="mr-auto">Mensaje</strong>
				</Toast.Header>
				<Toast.Body>{toastMsg}</Toast.Body>
			</Toast>
			<Form
				// noValidate
				// validated={validated}
				// onSubmit={handleSubmit}
				autocomplete="off"
				className="p-5 text-center">
				<h2>Registrate</h2>
				<Form.Control
					type="text"
					placeholder="Nombre"
					name="firstName"
					value={firstName}
					// onChange={onChangeFirstName}
					onChange={e => setFirstName(e.target.value)}
					className="m-3"
				/>
				<Form.Control
					type="text"
					placeholder="Apellido Paterno"
					name="fatherFamilyName"
					value={fatherFamilyName}
					onChange={e => setFatherFamilyName(e.target.value)}
					// onChange={onChangeFatherFamilyName}
					className="m-3"
				/>
				<Form.Control
					type="text"
					placeholder="Apellido Materno"
					name="motherFamilyName"
					value={motherFamilyName}
					onChange={e => setMotherFamilyName(e.target.value)}
					// onChange={onChangeMotherFamilyName}
					className="m-3"
				/>
				<Form.Control
					type="email"
					placeholder="Ingresa tu e-mail"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					// onChange={onChangeEmail}
					className="m-3"
				/>
				<Form.Group>
					<Form.Control
						type="password"
						placeholder="Ingresa una contraseña"
						name="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						// onChange={onChangePassword}
						className="pass"
					/>
					<Form.Text className="passText">La contraseña debe tener entre 6 a 12 carácteres</Form.Text>
				</Form.Group>
				<Form.Text className="info mt-5">
					Al hacer clic en Registrate, aceptas nuestras Condiciones, la Política de datos y la Política de
					cookies.
				</Form.Text>
				<Form.Check type="checkbox" label="Soy veterinario" />
				<Button type="submit" className="my-1 petBtn" onClick={handleSubmit}>
					Registrate
				</Button>
			</Form>
		</Container>
	);
};
