import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import Register from "../component/register";
import LoginForm from "../component/loginform";

import "../../styles/login.scss";

export const LoginView = () => {
	const params = useParams();
	return (
		<Container>
			<Register />
		</Container>
	);
};
