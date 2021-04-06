import React from "react";
import { Container } from "react-bootstrap";
import PetPhoto from "../component/pet-owner/petPhoto";
import "../../styles/user.scss";

function User() {
	return (
		<div>
			<Container>
				<h1 className="titlePet">Tus Mascotas registradas</h1>
				<PetPhoto />
			</Container>
		</div>
	);
}

export default User;
// const { store, actions } = useContext(Context);

// 	useEffect(async () => {
// 		await actions.getPetClouds();
// 	}, []);

/* <ul>
						{store.pets.map((item, index) => {
					return (
							<li key={index} >
										<h3 className="namePets" style={{ color: "red" }}>
											{item}
										</h3>
							</li>
                    )})}
					/>
                    </ul> */
