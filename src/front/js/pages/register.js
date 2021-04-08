import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Container, Form, Button, Toast, Row, Col } from "react-bootstrap";
import "../../styles/login.scss";
import { Redirect } from "react-router-dom";

export const RegisterView = () => {
	const { actions } = useContext(Context);
	const [firstName, setFirstName] = useState("");
	const [fatherFamilyName, setFatherFamilyName] = useState("");
	const [motherFamilyName, setMotherFamilyName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isVet, setIsVet] = useState("0");
	const [validated, setValidated] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [toastMsg, setToastMsg] = useState("");
	const [redirect, setRedirect] = useState(null);

	const expresions = {
		password: /^\d{6,8}$/, // between 6 and 8 characters
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	};

	const toggleShowToast = () => setShowToast(!showToast);

	const handleSubmit = e => {
		e.preventDefault();
		if (password.length < 6 || password.length > 8) {
			setToastMsg("El password debe tener entre 6 y 8 carácteres");
			toggleShowToast();
		} else if (email != email) {
			setToastMsg("Digitar formato correcto del mail");
			toggleShowToast();
		} else if (password == password.match(expresions.password) && email == email.match(expresions.email)) {
			actions.registerUser({
				firstName: firstName,
				fatherFamilyName: fatherFamilyName,
				motherFamilyName: motherFamilyName,
				email: email,
				password: password,
				isVet: isVet
			});
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

	const closeTost = () => {
		toggleShowToast();
		validated ? setRedirect(true) : "";

		console.log(isVet);
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
			<Form autoComplete="off" className="p-5 text-center">
				<h2>Regístrate</h2>
				<Form.Control
					type="text"
					placeholder="Nombre"
					name="firstName"
					value={firstName}
					onChange={e => setFirstName(e.target.value)}
					className="m-3"
				/>
				<Form.Control
					type="text"
					placeholder="Apellido Paterno"
					name="fatherFamilyName"
					value={fatherFamilyName}
					onChange={e => setFatherFamilyName(e.target.value)}
					className="m-3"
				/>
				<Form.Control
					type="text"
					placeholder="Apellido Materno"
					name="motherFamilyName"
					value={motherFamilyName}
					onChange={e => setMotherFamilyName(e.target.value)}
					className="m-3"
				/>
				<Form.Control
					type="email"
					placeholder="Ingresa tu e-mail"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					className="m-3"
				/>
				<Form.Group>
					<Form.Control
						type="password"
						placeholder="Ingresa una contraseña"
						name="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						className="pass"
					/>
					<Form.Text className="passText">La contraseña debe tener entre 6 a 8 carácteres</Form.Text>
				</Form.Group>
				<Form.Text className="info mt-5">
					Al hacer clic en Registrate, aceptas nuestras Condiciones, la Política de datos y la Política de
					cookies.
				</Form.Text>
				<Row>
					<Col xs={12} md={6}>
						<Form.Check
							type="radio"
							label="Soy Veterinario"
							name="isVet"
							value={1}
							onChange={e => setIsVet(e.target.value)}
						/>
					</Col>
					<Col xs={12} md={6}>
						<Form.Check
							type="radio"
							label="Soy Dueño de Mascota"
							name="isVet"
							value={0}
							onChange={e => setIsVet(e.target.value)}
						/>
					</Col>
				</Row>
				<Button type="submit" className="my-1 petBtn" onClick={handleSubmit}>
					Regístrate
				</Button>
			</Form>
		</Container>
	);
};
