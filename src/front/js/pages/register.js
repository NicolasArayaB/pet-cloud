import React from "react";
import { Container } from "react-bootstrap";

import Register from "../component/register";

import "../../styles/login.scss";

export const RegisterView = () => {
	return (
		<Container>
			<Register />
		</Container>
	);
};
