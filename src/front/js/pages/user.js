import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import PetPhoto from "../component/pet-owner/petPhoto";
import "../../styles/user.scss";

const User = () => {
	const { store, actions } = useContext(Context);

	useEffect(async () => {
		await actions.getPets();
	}, []);

	if (store.userPets.length !== 0) {
		return (
			<Container>
				<h1 className="titlePet">Tus mascotas registradas</h1>
				{store.userPets.map((item, index) => {
					return <PetPhoto key={index} {...item} />;
				})}
			</Container>
		);
	} else {
		return (
			<div>
				<h1 className="titlePet">No tienes mascotas inscritas :(</h1>
				<h1> dirígete a tu veterinaria más cercana para que obtengas tu CHIP</h1>
				<Row className="justify-content-center">
					<Col xs={12} md={4}>
						<Card border="0">
							<Card.Img
								variant="top"
								src="https://browser-apricot-puffin-v8aea7x1.ws-us03.gitpod.io/workspace/pet-cloud/src/front/img/not-pet-registration.png"
								style={{ width: "500px", height: "500px", borderRadius: "10px" }}
							/>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
};

export default User;
