import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import Checkup from "../component/vet/checkupTable";
import Vaccines from "../component/vet/vaccinesTable";

const VetInfo = props => {
	const { store, actions } = useContext(Context);
	const chip = props.location.state.chip;

	useEffect(async () => {
		await actions.getPetById(chip);
		await actions.getCondition("001");
	}, []);

	return (
		<Container>
			<Row className="m-3">
				<Col />
				<Col className="text-center">
					<h2>{store.pets.name}</h2>
				</Col>
				<Col>
					<Button className="petBtn float-right">Nuevo Control</Button>
				</Col>
			</Row>
			<Row className="m-3">
				<Col className="text-center">
					<p>
						{store.pets.species} | {store.pets.breed} | {store.pets.gender} | {store.pets.birthDate}
					</p>
				</Col>
			</Row>
			<Row className="m-3">
				<Col md={6}>
					<Checkup condition={store.conditions[0]} />
				</Col>
				<Col md={6}>
					<Vaccines />
				</Col>
			</Row>
		</Container>
	);
};

VetInfo.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired
	}).isRequired
};

export default VetInfo;
