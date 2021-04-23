import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const ForgottenPass = () => {
	const { actions } = useContext(Context);
	const [redirect, setRedirect] = useState("");

	const handleSubmit = e => {
		actions.validateMail(); // llamar a la fetch para validar mail ya registrado
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

		emailjs
			.send(
				"pet_cloud_service",
				"template_mail",
				{
					from_name: "PetCloud",
					email: "fcorrea.fernandez@gmail.com", // {store.email}
					to_name: "Francisco", // {store.first_name}
					message: "Esta es tu clave para recuperar la contraseña:", // opción 1 contraseña
					message_2: "Haz click en este link para recuperar contraseña", // opcion 2 link
					url: "https://3001-cyan-cod-ypw331wt.ws-us03.gitpod.io/recover-password", // opcion 2 link
					password: Math.floor(Math.random() * 1000000) // opción 1 contraseña
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
			icon: "success",
			title: "Revisa tu mail para recuperar tu nueva contraseña."
		});

		setRedirect(true);
		console.log("Redirect to home page");
	};

	return (
		<div>
			<Form autocomplete="off" className="p-5 text-center">
				{redirect ? <Redirect to="/" /> : ""}
				<Form.Text className="mt-5">Ingresa tu email para recuperar tu contraseña</Form.Text>
				<Form.Control
					type="email"
					name="email"
					placeholder="tuemail@petcloud.com"
					className="m-3 recover_password text-center"
				/>
				<Button className="petBtn my-1" onClick={handleSubmit}>
					Recuperar
				</Button>
			</Form>
		</div>
	);
};
