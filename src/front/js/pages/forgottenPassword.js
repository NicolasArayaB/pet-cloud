// Se deja en caso que que no funcione el mismo modal con login + recuperar contraseña

// import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { Context } from "../store/appContext";
// import { Redirect } from "react-router-dom";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";

// export const ForgottenPass = () => {
// 	// const { actions } = useContext(Context);
// 	const [redirect, setRedirect] = useState("");

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		// actions.emailForgotPassword();

// 		const ShowAlert = Swal.mixin({
// 			toast: true,
// 			position: "bottom",
// 			showConfirmButton: true,
// 			confirmButtonColor: "#EEAA7B",
// 			cancelButtonText: "Ok",
// 			timer: 4000,
// 			timerProgressBar: true,
// 			didOpen: toast => {
// 				toast.addEventListener("mouseenter", Swal.stopTimer);
// 				toast.addEventListener("mouseleave", Swal.resumeTimer);
// 			}
// 		});

// 		emailjs
// 			.send(
// 				"pet_cloud_service",
// 				"template_mail",
// 				{
// 					from_name: "PetCloud",
// 					email: "fcorrea.fernandez@gmail.com", // {variable}
// 					to_name: "Francisco", // {variable}
// 					message: "Esta es tu clave para recuperar la contraseña:",
// 					password: Math.floor(Math.random() * 1000000)
// 				},
// 				"user_ipNgY6FvK2EvoDrPH27Bw"
// 			)
// 			.then(
// 				resp => {
// 					console.log("email has been sent to recover password");
// 				},
// 				error => {
// 					console.log("unexpected error");
// 				}
// 			);
// 		ShowAlert.fire({
// 			icon: "info",
// 			title: "Email con nueva contraseña enviada con éxito."
// 		});

// 		setRedirect(true);
// 		console.log("Redirect to home page");
// 	};

// 	return (
// 		<Container className="registerForms forgottenPass">
// 			{redirect ? <Redirect to="/" /> : ""}
// 			<Form autocomplete="off" className="p-5 text-center">
// 				<span>{JSON.stringify()}</span>
// 				<Form.Text className="mt-5">Ingresa tu email para recuperar tu contraseña</Form.Text>
// 				<Form.Control type="email" placeholder="tuemail@petcloud.com" className="m-3 text-center" />
// 				<Button className="petBtn my-1" onClick={handleSubmit}>
// 					Recuperar
// 				</Button>
// 			</Form>
// 		</Container>
// 	);
// };
