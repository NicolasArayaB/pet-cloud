import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import Checkup from "../component/vet/checkupTable";
import Vaccines from "../component/vet/vaccinesTable";

const VetInfo = props => {
	const { store, actions } = useContext(Context);
	const chip = props.location.state.chip;

	let id = null;

	if (store.petById.id) id = store.petById.id.split("-")[1];

	useEffect(async () => {
		await actions.getPetById(chip);
		await actions.getPetInformation("001");
		await actions.getCondition("001");
		await actions.getObservation("001");
		await actions.getVaccines("001");
	});
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
						{store.petById.species} | {store.petById.breed} | {store.petById.gender} |{" "}
						{store.petById.birthDate}
					</p>
				</Col>
			</Row>
			<Row className="m-3">
				<Col md={6}>
					<Checkup
						condition={store.conditions[0]}
						observations={store.observations}
						genderStatus={store.pets.genderStatus}
					/>
				</Col>
				<Col md={6}>
					<Vaccines date={store.vaccines.date} vaccine={store.vaccines.vaccine} />
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
