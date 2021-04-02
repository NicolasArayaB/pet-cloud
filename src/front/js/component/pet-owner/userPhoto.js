import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const UserPhoto = () => {
	return (
		<div>
			<CardGroup>
				<Card>
					<Card.Img
						variant="top"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/3.4_User_View/src/front/img/DogPhoto01.png"
					/>
					<Card.Body />
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/3.4_User_View/src/front/img/DogPhoto02.png"
						style={{ width: "12rem" }}
					/>
					<Card.Body />
				</Card>
			</CardGroup>
		</div>
	);
};

export default UserPhoto;
