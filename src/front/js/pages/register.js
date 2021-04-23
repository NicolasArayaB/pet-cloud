import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../../styles/login.scss";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export const RegisterView = () => {
	const { actions } = useContext(Context);
	const [firstName, setFirstName] = useState("");
	const [fatherFamilyName, setFatherFamilyName] = useState("");
	const [motherFamilyName, setMotherFamilyName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isVet, setIsVet] = useState("0");
	const [redirect, setRedirect] = useState(null);

	const expresions = {
		password: /^\d\w{6,8}$/, // between 6 and 8 characters
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	};

	const handleSubmit = e => {
		e.preventDefault();

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

		if (password.length < 6 || password.length > 8) {
			ShowAlert.fire({
				icon: "info",
				title: "La contraseña debe tener entre 6 y 8 carácteres"
			});
		} else if (email != email.match(expresions.email)) {
			ShowAlert.fire({
				icon: "info",
				title: "Digitar formato correcto del mail ejemplo@gmail.com"
			});
		} else if (password == password.match(expresions.password) && email == email.match(expresions.email)) {
			actions.registerUser({
				firstName: firstName,
				fatherFamilyName: fatherFamilyName,
				motherFamilyName: motherFamilyName,
				email: email,
				password: password,
				isVet: isVet
			});
			ShowAlert.fire({
				icon: "success",
				title: "Usuario registrado en forma exitosa"
			});
			setRedirect(true);
		} else {
			e.preventDefault();
			ShowAlert.fire({
				icon: "success",
				title: "Usuario registrado en forma exitosa"
			});
		}
	};

	return (
		<Container className="registerForms mt-5">
			{redirect ? <Redirect to="/" /> : ""}
			<Form autoComplete="off" className="p-5 text-center">
				<h1 className="my-4">Regístrate</h1>
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
