import React, { useState, useContext } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const RecoverPassword = props => {
	const { actions } = useContext(Context);
	const [redirect, setRedirect] = useState("");
	const [password, setPassword] = useState("");
	const [againPassword, setAgainPassword] = useState("");

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

	const handleSubmit = e => {
		e.preventDefault();

		if (password != againPassword) {
			ShowAlert.fire({
				icon: "info",
				title: "Tus contraseñas no coinciden, inténtalo nuevamente."
			});
		} else {
			console.log(props.match.params.id, "id");
			actions.recoverPassword(password, props.match.params.id);

			ShowAlert.fire({
				icon: "success",
				title: "Muchas gracias, puedes loguearte nuevamente."
			});

			setRedirect(true);
		}
	};

	return (
		<Container className="mt-5">
			<Form autocomplete="off" className="my-5 text-center">
				{redirect ? <Redirect to="/" /> : ""}
				<Row className="mt-5 justify-content-center">
					<Col className="recover">
						<h2 className="mt-5">Ingresa tu nueva contraseña</h2>
						<Form.Control
							type="password"
							name="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							className="my-3 text-center"
						/>
						<Form.Text className="mt-1">La contraseña debe tener entre 6 a 8 carácteres</Form.Text>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="recover">
						<h2 className="mt-5">Reingresa tu contraseña nuevamente</h2>
						<Form.Control
							type="password"
							name="password"
							value={againPassword}
							onChange={e => setAgainPassword(e.target.value)}
							className="mt-3 text-center"
						/>
					</Col>
				</Row>
				<Row>
					<Col className="mt-5">
						<Button className="petBtn my-1" onClick={handleSubmit}>
							Recuperar contraseña
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

RecoverPassword.propTypes = {
	match: PropTypes.shape({
		params: {
			id: PropTypes.number
		}
	})
};
