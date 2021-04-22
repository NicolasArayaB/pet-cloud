import React, { useContext, useState } from "react";
import { Modal, Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const LoginModal = params => {
	const { actions } = useContext(Context);
	const [recoverPassword, setRecoverPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		// actions.emailForgotPassword();

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

		emailjs
			.send(
				"pet_cloud_service",
				"template_mail",
				{
					from_name: "PetCloud",
					email: "fcorrea.fernandez@gmail.com", // {variable}
					to_name: "Francisco", // {variable}
					message: "Esta es tu clave para recuperar la contraseña:",
					password: Math.floor(Math.random() * 1000000)
				},
				"user_ipNgY6FvK2EvoDrPH27Bw"
			)
			.then(
				resp => {
					console.log("email has been sent to recover password");
				},
				error => {
					console.log("unexpected error");
				}
			);
		ShowAlert.fire({
			icon: "info",
			title: "Email con nueva contraseña enviada con éxito."
		});

		setRedirect(true);
		console.log("Redirect to home page");
	};

	const submitHandler = async e => {
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

		params.close();
		await actions.setLogin(
			{
				email: email,
				password: password
			},
			history
		);
		ShowAlert.fire({
			icon: "success",
			title: "Haz sido logueado con éxito."
		});
	};

	return (
		<Modal show={params.show} onHide={params.close}>
			<Modal.Header closeButton>
				<Modal.Title style={{ color: "white" }}>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{!recoverPassword ? (
					<Form autoComplete="off" onSubmit={e => submitHandler(e)}>
						<Form.Control
							value={email}
							onChange={e => setEmail(e.target.value)}
							type="email"
							placeholder="Ingresa tu e-mail"
							className="mb-2"
						/>
						<Form.Group>
							<Form.Control
								value={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								placeholder="Ingresa tu contraseña"
							/>
							<Form.Text>La contraseña debe tener entre 6 a 8 caracteres</Form.Text>
						</Form.Group>
						<Container>
							<Row>
								<Col align="center">
									<Button type="submit" className="petBtn">
										Login
									</Button>
								</Col>
							</Row>
						</Container>
						<Link onClick={setRecoverPassword}>¿Olvidaste tu contraseña?</Link>
					</Form>
				) : (
					<Form autocomplete="off" className="p-5 text-center">
						<Form.Text className="mt-1">Ingresa tu email para recuperar tu contraseña</Form.Text>
						<Form.Control type="email" placeholder="tuemail@petcloud.com" className="m-3 text-center" />
						<Button className="petBtn my-1" onClick={handleSubmit}>
							Recuperar
						</Button>
					</Form>
				)}
			</Modal.Body>
		</Modal>
	);
};

export default LoginModal;
