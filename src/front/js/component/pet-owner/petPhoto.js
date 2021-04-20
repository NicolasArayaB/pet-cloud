import React, { useState } from "react";
import { Card, CardGroup, ListGroup } from "react-bootstrap";
import "../../../styles/user.scss";
import User from "../../pages/user";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PetPhoto = props => {
	const [redirect, setRedirect] = useState(false);

	return (
		<div>
			<CardGroup className="marginGroup">
				{redirect ? (
					<Redirect
						to={{
							pathname: "/user/information",
							state: { chip_identifier: props.chip_identifier, id: props.id }
						}}
					/>
				) : (
					""
				)}
				<Card border="white">
					<Card.Link className="img-pet" onClick={() => setRedirect(true)}>
						<Card.Img
							className="rounded-circle mx-5"
							variant="top"
							src={
								props.img_url
									? props.img_url
									: "https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/3.4_User_View/src/front/img/DogPhoto01.png"
							}
							style={{ width: "12rem" }}
						/>
						<ListGroup className="pets-list" variant="list-group-flush">
							<ListGroup.Item>{props.name}</ListGroup.Item>
						</ListGroup>
					</Card.Link>
				</Card>
			</CardGroup>
		</div>
	);
};

PetPhoto.propTypes = {
	name: PropTypes.string,
	chip_identifier: PropTypes.string,
	img_url: PropTypes.string,
	id: PropTypes.integer
};

export default PetPhoto;
