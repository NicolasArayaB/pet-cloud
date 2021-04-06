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
		<div>
			<Container>
				<h1 className="titlePet">Tus Mascotas registradas</h1>
				{store.userPets.map((item, index) => {
					return (
						<PetPhoto
							// {name  userPets.name},
							// {identifier userPets.identifier}
							key={index}
							{...item}
						/>
					);
				})}
			</Container>
		</div>
	);
}

export default User;
