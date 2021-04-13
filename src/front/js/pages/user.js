import React, { useContext, useEffect, useState } from "react";
import { Container, Toast } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import PetPhoto from "../component/pet-owner/petPhoto";
import "../../styles/user.scss";

function User() {
	const { store, actions } = useContext(Context);
	const [toastMsg, setToastMsg] = useState("");
	const [showToast, setShowToast] = useState(true);
	const [validated, setValidated] = useState(false);
	const [redirect, setRedirect] = useState(null);

	const toggleShowToast = () => setShowToast(!showToast);

	if (store.userPets === []) {
		setToastMsg("No tienes mascotas inscritas, acercate a tu veterinario más cercano para inscribir a tu mascota");
		console.log(setToastMsg, "<--toast");
		toggleShowToast();
	} else {
		useEffect(async () => {
			await actions.getPets();
			setToastMsg("Felicitaciones, ya tienes mascota(s) registrada(s)");
			setValidated(true);
			toggleShowToast();
			console.log(store.userPets, "<--storeUserPets");
			console.log(actions.getPets, "<--getPets");
		}, []);
	}

	const closeToast = () => {
		toggleShowToast();
		validated ? setRedirect(true) : "";
	};

	return (
		<Container>
			{redirect ? <Redirect to="/user" /> : ""}
			<h1 className="titlePet">Tus Mascotas registradas</h1>
			{store.userPets.map((item, index) => {
				return <PetPhoto key={index} {...item} />;
			})}
			<div className="position-relative">
				<Toast show={showToast} onClose={closeToast} delay={4000} autohide className="my-4 newPetToast">
					<Toast.Header className="text-align-left">
						<i className="far fa-hand-point-right" />
						<strong className="mr-auto">Mensaje</strong>
					</Toast.Header>
					<Toast.Body>{toastMsg}</Toast.Body>
				</Toast>
			</div>
		</Container>
	);
}
export default User;
