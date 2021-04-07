import React, { useReducer, useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Toast } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

const NewCheckup = props => {
	const initialFormState = {
		weight: "",
		condition: "",
		vaccines: ""
	};

	const formReducer = (state, action) => {
		if (action.type == "HANDLE INPUT TEXT") {
			return {
				...state,
				[action.field]: action.payload
			};
		} else state;
	};
	const { store, actions } = useContext(Context);
	const [formState, dispatch] = useReducer(formReducer, initialFormState);
	const [showToast, setShowToast] = useState("");
	const [redirect, setRedirect] = useState(null);
	const chip = props.location.state.chip;

	const toggleShowToast = () => setShowToast(!showToast);

	const handleTextChange = e => {
		dispatch({
			type: "HANDLE INPUT TEXT",
			field: e.target.name,
			payload: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(store.id, "store id");
		actions.newPetObservation(store.id, formState.weight, "Kg");
		// actions.newPetVaccine(store.id, formState.vaccines, "2");
		// actions.newPetCondition(store.id, formState.condition);
	};

	const closeToast = () => {
		toggleShowToast();
		setRedirect(true);
	};

	useEffect(async () => {
		await actions.getIdByChip(chip);
	}, []);

	return (
		<Container className="registerForms">
			{redirect ? <Redirect to="/vet" /> : ""}
			<Toast show={showToast} onClose={closeToast} delay={5000} autohide className="mt-4 mx-auto">
				<Toast.Header>
					<strong className="mr-auto">Mensaje</strong>
				</Toast.Header>
				<Toast.Body>Control fue ingresado con exito</Toast.Body>
			</Toast>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit} autoComplete="off" className="p-5 text-center">
						<h2>Nuevo Control</h2>
						<Form.Control
							type="text"
							placeholder="Peso"
							name="weight"
							value={formState.weight}
							onChange={e => handleTextChange(e)}
							className="m-3"
						/>
						<Form.Control
							type="text"
							placeholder="Enfermedades"
							name="condition"
							value={formState.condition}
							onChange={e => handleTextChange(e)}
							className="m-3"
						/>
						<Form.Control
							type="text"
							placeholder="Vacunas"
							name="vaccines"
							value={formState.vaccines}
							onChange={e => handleTextChange(e)}
							className="m-3"
						/>
						<Button type="submit" className="petBtn">
							Crear Control
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);

	NewCheckup.propTypes = {
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
			state: PropTypes.object.isRequired
		}).isRequired
	};
};

export default NewCheckup;
