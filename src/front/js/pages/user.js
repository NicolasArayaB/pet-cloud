import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col } from "react-bootstrap";
import UserPhoto from "../component/pet-owner/userPhoto";
import "../../styles/user.scss";

function User() {
	const { store, actions } = useContext(Context);

	useEffect(async () => {
		await actions.getPets();
	}, []);

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
