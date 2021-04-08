import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../store/appContext";
import PetPhoto from "../component/pet-owner/petPhoto";
import "../../styles/user.scss";

function User() {
	const { store, actions } = useContext(Context);

	useEffect(async () => {
		await actions.getPets();
	}, []);

	return (
		<Container>
			<h1 className="titlePet">Tus Mascotas registradas</h1>
			{store.userPets.map((item, index) => {
				return <PetPhoto key={index} {...item} />;
			})}
		</Container>
	);
}

export default User;
