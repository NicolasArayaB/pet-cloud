import React, { useReducer, useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Toast } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import Swal from "sweetalert2";

const NewCheckup = props => {
	const initialFormState = {
		weight: "",
		condition: "",
		vaccines: ""
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
	const [redirect, setRedirect] = useState(null);
	const chip = props.location.state.chip;

	const handleTextChange = e => {
		dispatch({
			type: "TEXT",
			field: e.target.name,
			payload: e.target.value
		});
	};

	const ShowAlert = Swal.mixin({
		toast: true,
		position: "bottom",
		showConfirmButton: true,
		confirmButtonColor: "#EEAA7B",
		cancelButtonText: "Ok",
		timer: 4000,
		timerProgressBar: true,
		didOpen: toast => {
			toast.addEventListener("mouseenter", Swal.stopTimer);
			toast.addEventListener("mouseleave", Swal.resumeTimer);
		}
	});

	const handleSubmit = e => {
		e.preventDefault();
		const petId = store.petById.id;
		actions.newPetObservation(petId, formState.weight, "Kg");
		actions.newPetVaccine(petId, formState.vaccines, "2");
		actions.newPetCondition(petId, formState.condition);
		ShowAlert.fire({
			icon: "success",
			title: "Control fue ingresado con éxito"
		});
		setRedirect(true);
	};

	useEffect(() => {
		actions.getIdByChip(chip);
	}, []);

	return (
		<Container className="registerForms">
			<Row>
				{redirect ? <Redirect to={{ pathname: "/vet", state: { chip: chip } }} /> : ""}
				<Col>
					<Form onSubmit={handleSubmit} autoComplete="off" className="p-5 text-center mt-5">
						<h1>Nuevo Control</h1>
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
							placeholder="Diagnóstico"
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
