import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Checkup from "../component/vet/checkupTable";
import Vaccines from "../component/vet/vaccinesTable";

const VetInfo = props => {
	const { store, actions } = useContext(Context);
	const chip = props.chip;
	let birthDate = "";
	let gender = "";
	let species = "";

	if (store.pets.birthDate) {
		birthDate = store.pets.birthDate
			.split("-")
			.reverse()
			.join("-");
	}

	if (store.pets.gender == "male") {
		gender = "Macho";
	} else if (store.pets.gender == "female") {
		gender = "Hembra";
	}

	if (store.pets.species == "Dog") {
		species = "Perro";
	} else if (store.pets.species == "Cat") {
		species = "Gato";
	} else if (store.pets.species == "Other") {
		species = "Exótico";
	}

	useEffect(() => {
		actions.getPetById(chip);
	}, []);

	return (
		<Container>
			<Row>
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
				<Col className="text-center mt-2">
					<p>
						Especie: {species} | Raza: {store.pets.breed} | Genero: {gender}
					</p>
				</Col>
			</Row>
			<Row className="m-3">
				<Col className="text-center mt-2">
					<p>Fecha de nacimiento: {birthDate}</p>
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
					<Vaccines date={store.vaccines.date} vaccine={store.vaccines.vaccine} dose={store.vaccines.dose} />
				</Col>
			</Row>
		</Container>
	);

	VetInfo.propTypes = {
		// location: PropTypes.shape({
		// 	pathname: PropTypes.string.isRequired,
		// 	state: PropTypes.object.isRequired
		// }).isRequired
		chip: PropTypes.integer
	};
};

export default VetInfo;
