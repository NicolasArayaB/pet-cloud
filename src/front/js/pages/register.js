import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import Register from "../component/register";

import "../../styles/login.scss";

export const RegisterView = () => {
	const params = useParams();
	return (
		<Container>
			<Register />
		</Container>
	);
};
