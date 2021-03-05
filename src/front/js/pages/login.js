import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import Register from "../component/register";
import LoginForm from "../component/loginform";

import "../../styles/login.scss";

export const LoginView = () => {
	const params = useParams();

	//	if (params.path == "register") {
	//return (
	//	<Container>
	//		<Register />
	//	</Container>
	//);
	//	} else if (params.path == "login") {
	return (
		<Container>
			<LoginForm />
		</Container>
	);
	//	} else if (params.path == "pwrd") {
	//		return (
	//			<Container>
	//				<p>Aca va el form de recuperar contraseña</p>
	//			</Container>
	//		);
	//	}
};
