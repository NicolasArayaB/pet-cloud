import React, { useReducer, useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Toast, InputGroup } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

const NewCheckup = props => {
	const initialFormState = {
		weight: "",
		unit: "",
		condition: "",
		vaccines: "",
		quantity: "",
		code: ""
	};

	const formReducer = (state, action) => {
		if (action.type == "TEXT") {
			return {
				...state,
				[action.field]: action.payload
			};
		} else state;
	};

	const { store, actions } = useContext(Context);
	const [formState, dispatch] = useReducer(formReducer, initialFormState);
	const [showToast, setShowToast] = useState(false);
	const [redirect, setRedirect] = useState(null);
	const chip = props.location.state.chip;

	const handleTextChange = e => {
		dispatch({
			type: "TEXT",
			field: e.target.name,
			payload: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const petId = store.petById.id;
		console.log(formState.code, formState.unit, formState.quantity);

		actions.newPetObservation(petId, formState.weight, formState.unit);
		actions.newPetVaccine(petId, formState.vaccines, formState.quantity, formState.code);
		actions.newPetCondition(petId, formState.condition);
		setShowToast(true);
	};

	const closeToast = () => {
		setRedirect(true);
		setShowToast(!showToast);
	};

	useEffect(() => {
		actions.getIdByChip(chip);
	}, []);

	return (
		<Container className="registerForms">
			<div className="position-relative">
				<Toast show={showToast} onClose={closeToast} delay={5000} autohide className="mt-4 newCheckupToast">
					<Toast.Header>
						<strong className="mr-auto">Mensaje</strong>
					</Toast.Header>
					<Toast.Body>Control fue ingresado con éxito</Toast.Body>
				</Toast>
			</div>
			<Row>
				{redirect ? <Redirect to={{ pathname: "/vet", state: { chip: chip } }} /> : ""}
				<Col>
					<Form onSubmit={handleSubmit} autoComplete="off" className="p-5 text-center mt-5">
						<h1>Nuevo Control</h1>
						<InputGroup className="my-3">
							<Form.Control
								type="text"
								placeholder="Peso"
								name="weight"
								value={formState.weight}
								onChange={e => handleTextChange(e)}
							/>
							<InputGroup.Append>
								<Form.Control as="select" name="unit" onChange={e => handleTextChange(e)}>
									<option />
									<option>Kg</option>
									<option>g</option>
								</Form.Control>
							</InputGroup.Append>
						</InputGroup>

						<Form.Control
							type="text"
							placeholder="Diagnóstico"
							name="condition"
							value={formState.condition}
							onChange={e => handleTextChange(e)}
							className="my-3"
						/>
						<InputGroup className="my-3">
							<Form.Control
								type="text"
								placeholder="Vacunas"
								name="vaccines"
								value={formState.vaccines}
								onChange={e => handleTextChange(e)}
							/>
							<InputGroup.Append>
								<Form.Control
									type="text"
									name="quantity"
									value={formState.quantity}
									onChange={e => handleTextChange(e)}
								/>
							</InputGroup.Append>
							<InputGroup.Append>
								<Form.Control as="select" name="code" onChange={e => handleTextChange(e)}>
									<option />
									<option>UI</option>
									<option>mg</option>
								</Form.Control>
							</InputGroup.Append>
						</InputGroup>
						<Button type="submit" className="petBtn">
							Crear nuevo control
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
