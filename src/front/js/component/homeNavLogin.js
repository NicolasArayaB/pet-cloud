import React from "react";
import { Modal, Button } from "react-bootstrap";
import Login from "./loginform";

const LoginModal = params => {
	return (
		<Modal show={params.show} onHide={params.close}>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Login />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" type="submit">
					Login
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default LoginModal;
