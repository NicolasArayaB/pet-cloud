import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../../../styles/user.scss";

const PetPhoto = () => {
	return (
		<div>
			<CardGroup className="marginGroup">
				<Card border="white">
					<Card.Link className="img-pet" href="user/information">
						<Card.Img
							className="rounded-circle"
							variant="top"
							src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/3.4_User_View/src/front/img/DogPhoto01.png"
							style={{ width: "12rem" }}
						/>
					</Card.Link>
				</Card>
			</CardGroup>
		</div>
	);
};

export default PetPhoto;
