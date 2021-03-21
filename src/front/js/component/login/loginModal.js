import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Modal, Button } from "react-bootstrap";
import LoginForm from "../login/loginform";

const LoginModal = params => {
	const { actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const clickHandler = e => {
		e.preventDefault();
		params.close;

		actions.setLogin({
			email: email,
			password: password
		});
	};

	return (
		<Modal
			show={params.show}
			onHide={params.close}
			email={email}
			password={password}
			setEmail={setEmail}
			setPassword={setPassword}>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<LoginForm close={params.close} />
			</Modal.Body>
			<Modal.Footer className="justify-content-center">
				<Button onClick={e => clickHandler(e)} type="submit" className="petBtn">
					Login
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default LoginModal;
