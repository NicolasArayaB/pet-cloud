import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const ForgottenPass = () => {
	const { actions, store } = useContext(Context);
	const [redirect, setRedirect] = useState("");
	const [userEmail, setUserEmail] = useState("");

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

	const handleSubmit = async e => {
		e.preventDefault();
		await actions.validateMail(userEmail, emailjs); // llamar a la fetch para validar mail ya registrado

		ShowAlert.fire({
			icon: "success",
			title: "Revisa tu mail para recuperar tu nueva contraseña."
		});

		setRedirect(true);
		console.log("Redirect to home page");
	};

	return (
		<Container>
			<Form autoComplete="off" onSubmit={handleSubmit} className="my-5">
				{redirect ? <Redirect to="/" /> : ""}
				<Row className="my-5 py-5 justify-content-center">
					<Col className="recover">
						<h2 className="mt-5">Ingresa tu email para recuperar contraseña</h2>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="recover">
						<Form.Control
							type="email"
							name="email"
							value={userEmail}
							onChange={e => setUserEmail(e.target.value)}
							placeholder="tuemail@petcloud.com"
							className="recover_password text-center"
						/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="recover">
						<Button className="petBtn my-5" type="submit">
							Recuperar
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};
