import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import PetPhoto from "../component/pet-owner/petPhoto";
import "../../styles/user.scss";

const User = () => {
	const { store, actions } = useContext(Context);

	console.log(store.userPets, "Store.userPets");

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
				<h2 className="titlePet_not_found"> Dirígete a tu veterinaria más cercana para que obtengas tu CHIP</h2>
				<Row>
					<Col sm className="titlePet_not_found">
						<img
							className="rounded"
							src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/19.-more-information-user-view/src/front/img/not-pet-registration.png"
							style={{ width: "25rem" }}
						/>
					</Col>
				</Row>
			</div>
		);
	}
};

export default User;
