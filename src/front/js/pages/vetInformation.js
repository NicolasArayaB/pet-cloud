import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import Checkup from "../component/vet/checkupTable";
import Vaccines from "../component/vet/vaccinesTable";

const VetInfo = props => {
	const { store, actions } = useContext(Context);
	const chip = props.location.state.chip;

	useEffect(() => {
		actions.getPetById(chip);
	}, []);

	return (
		<Container>
			<Row className="m-3">
				<Col />
				<Col className="text-center">
					<h2>{store.pets.name}</h2>
				</Col>
				<Col>
					<Link to={{ pathname: "/checkup", state: { chip: chip } }}>
						<Button className="petBtn float-right">Nuevo Control</Button>
					</Link>
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

	VetInfo.propTypes = {
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
			state: PropTypes.object.isRequired
		}).isRequired
	};
};

export default VetInfo;
