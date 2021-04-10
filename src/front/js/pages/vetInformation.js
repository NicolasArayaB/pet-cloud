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
			<Row className="m-3 mt-5">
				<Col />
				<Col className="text-center mt-5">
					<h2>{store.pets.name}</h2>
				</Col>
				<Col>
					<Link to={{ pathname: "/checkup", state: { chip: chip } }}>
						<Button className="petBtn float-right my-5">Nuevo Control</Button>
					</Link>
				</Col>
			</Row>
			<Row className="m-3">
				<Col className="text-center mt-2">
					<p>
						{store.pets.species} | {store.pets.breed} | {store.pets.gender} | {store.pets.birthDate}
					</p>
				</Col>
			</Row>
			<Row className="m-3">
				<Col md={6}>
					<Checkup
						condition={store.conditions}
						weight={store.observations.weight}
						update={store.observations.update}
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
