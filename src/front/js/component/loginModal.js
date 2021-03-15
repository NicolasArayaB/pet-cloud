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
				<Login close={params.close} />
			</Modal.Body>
			<Modal.Footer className="justify-content-center">
				<Button type="submit" className="petBtn">
					Login
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default LoginModal;
