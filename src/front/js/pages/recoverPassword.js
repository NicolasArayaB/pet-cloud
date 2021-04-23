import React, { useState, useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const RecoverPassword = () => {
	const { actions } = useContext(Context);
	const [redirect, setRedirect] = useState("");

	const handleSubmit = e => {
		actions.recoverPassword(); // llamar a la fetch para ingresar nueva contraseña
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

		ShowAlert.fire({
			icon: "success",
			title: "Muchas gracias puedes loguearte nuevamente."
		});

		setRedirect(true);
		console.log("Redirect to home page");
	};

	return (
		<div>
			<Form autocomplete="off" className="p-5 text-center">
				{redirect ? <Redirect to="/" /> : ""}
				<Row className="text-center">
					<Col xs={12} md={12}>
						<Form.Text className="mt-5">Ingresa tu nueva contraseña</Form.Text>
						<Form.Control type="password" name="password" className="m-3 text-center" />
					</Col>
					<Col xs={12} md={12}>
						<Form.Text className="mt-5">Reingresa tu contraseña nuevamente</Form.Text>
						<Form.Control type="password" name="password" className="m-3 text-center" />
					</Col>
				</Row>
				<Button className="petBtn my-1" onClick={handleSubmit}>
					Recuperar contraseña
				</Button>
			</Form>
		</div>
	);
};
