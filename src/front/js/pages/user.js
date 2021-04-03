import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserPhoto from "../component/pet-owner/userPhoto";
import "../../styles/user.scss";

function User() {
	return (
		<div>
			<Container>
				<h1 className="titlePet">Tus Mascotas</h1>
				<UserPhoto />
			</Container>
		</div>
	);
}

export default User;
