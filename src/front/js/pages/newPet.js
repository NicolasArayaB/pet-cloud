import React from "react";
import { Container } from "react-bootstrap";
import NewPetForm from "../component/pet-owner/newPetForm";

const NewPet = () => {
	return (
		<div>
			<Container>
				<br />
				<br />
				<NewPetForm />
			</Container>
		</div>
	);
};

export default NewPet;
