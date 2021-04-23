import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
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
		<div>
			<Form autoComplete="off" onSubmit={handleSubmit} className="p-5 text-center">
				{redirect ? <Redirect to="/" /> : ""}
				<Form.Text className="mt-5">Ingresa tu email para recuperar tu contraseña</Form.Text>
				<Form.Control
					type="email"
					name="email"
					value={userEmail}
					onChange={e => setUserEmail(e.target.value)}
					placeholder="tuemail@petcloud.com"
					className="m-3 recover_password text-center"
				/>
				<Button className="petBtn my-1" type="submit">
					Recuperar
				</Button>
			</Form>
		</div>
	);
};
