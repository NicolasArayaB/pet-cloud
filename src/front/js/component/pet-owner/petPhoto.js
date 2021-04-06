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
						to={{ pathname: "/user/information", state: { chip_identifier: props.chip_identifier } }}
					/>
				) : (
					""
				)}
				<Card border="white">
					<Card.Link className="img-pet" onClick={() => setRedirect(true)}>
						<Card.Img
							className="rounded-circle"
							variant="top"
							src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/3.4_User_View/src/front/img/DogPhoto01.png"
							style={{ width: "12rem" }}
						/>
						<ListGroup variant="flush">
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
	chip_identifier: PropTypes.string
};

export default PetPhoto;
