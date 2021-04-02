import React, { useContext, useState } from "react";
import { Form, Col, Button, Row, Toast } from "react-bootstrap";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";

const NewPetForm = () => {
	const { actions } = useContext(Context);
	const [name, setName] = useState("");
	const [identifier, setIdentifier] = useState("");
	const [gender, setGender] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [species, setSpecies] = useState("");
	const [breed, setBreed] = useState("");
	const [genderStatus, setGenderStatus] = useState("");
	const [petOwner_name, setPetOwner_name] = useState("");
	const [petOwner_mother, setPetOwner_mother] = useState("");
	const [petOwner_father, setPetOwner_father] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [setValidated] = useState("");
	const [redirect, setRedirect] = useState("");
	const [showToast, setShowToast] = useState(false);

	const expresions = {
		identifier: /^\d[9]$/, // 15 numbers
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d[9]$/ // 9 numbers
		// password: /^.{6,12}$/, // 6 a 12 digitos.
	};

	const toggleShowToast = () => setShowToast(!showToast);

	const handleSubmit = () => {
		setValidated(true);
		console.log("Submitted");
		console.log(email);
		actions.createNewPet(
			name,
			identifier,
			gender,
			birthDate,
			species,
			breed,
			genderStatus,
			petOwner_name,
			petOwner_mother,
			petOwner_father,
			address,
			phone,
			email
		);
		toggleShowToast();
	};

	const closeTost = () => {
		toggleShowToast();
		setRedirect(true);
	};

	const validation = () => {
		if (RegExp) {
			if (RegExp.test(e.target.value)) {
				console.log("Right input");
			} else {
				console.log("Wrong input");
			}
		}
	};

	return (
		<div>
			{redirect ? <Redirect to="/" /> : ""}
			<Form.Group>
				<Row className="text-center">
					<Col xs={12} md={12}>
						<h3
							className="nombre mt-4 text-center"
							style={{
								color: "white",
								backgroundColor: "#66B9BF",
								borderRadius: "5px"
							}}>
							Datos de la mascota
						</h3>
					</Col>
				</Row>
				<Form.Row>
					<Form.Label column lg={2}>
						Nombre Mascota
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="name"
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder="Ingresa el nombre de la mascota"
						/>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Chip ID
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="identifier"
							value={identifier}
							onChange={e => setIdentifier(e.target.value)}
							RegExp={expresions.identifier}
							errorLegend="Debe ingresar un CHIP de 15 digitos"
							placeholder="Ingresa el Chip ID"
						/>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Género
					</Form.Label>
					<Col>
						<Form.Control
							as="select"
							type="text"
							name="gender"
							value={gender}
							onChange={e => setGender(e.target.value)}
							placeholder="Ingresa el género">
							<option />
							<option>male</option>
							<option>female</option>
							<option>Unknown</option>
						</Form.Control>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Fecha de nacimiento
					</Form.Label>
					<Col>
						<Form.Control
							type="date"
							name="birthDate"
							value={birthDate}
							onChange={e => setBirthDate(e.target.value)}
							placeholder="Ingresa la fecha de nacimiento"
						/>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Especie
					</Form.Label>
					<Col>
						<Form.Control
							as="select"
							type="text"
							name="species"
							value={species}
							onChange={e => setSpecies(e.target.value)}
							placeholder="Ingresa la especie">
							<option />
							<option>Dog</option>
							<option>Cat</option>
							<option>Other</option>
						</Form.Control>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Estado Reproductivo
					</Form.Label>
					<Col>
						<Form.Control
							as="select"
							type="text"
							name="genderStatus"
							value={genderStatus}
							onChange={e => setGenderStatus(e.target.value)}
							placeholder="Ingresa Estado Reproductivo">
							<option />
							<option>neutered</option>
							<option>intact</option>
							<option>unknown</option>
						</Form.Control>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Raza
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="breed"
							value={breed}
							onChange={e => setBreed(e.target.value)}
							placeholder="Ingresa la raza"
						/>
					</Col>
				</Form.Row>
				<Row className="text-center">
					<Col xs={12} md={12}>
						<h3
							className="nombre mt-4 text-center"
							style={{
								color: "white",
								backgroundColor: "#66B9BF",
								borderRadius: "5px"
							}}>
							Datos del dueño de la mascota
						</h3>
					</Col>
				</Row>
				<Form.Row>
					<Form.Label column lg={2}>
						Nombre del dueño
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="petOwner_name"
							value={petOwner_name}
							onChange={e => setPetOwner_name(e.target.value)}
							placeholder="Ingresa el nombre del dueño"
						/>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Apellido paterno
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="petOwner_father"
							value={petOwner_father}
							onChange={e => setPetOwner_father(e.target.value)}
							placeholder="Ingresa el apellido paterno del dueño"
						/>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Apellido materno
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="petOwner_mother"
							value={petOwner_mother}
							onChange={e => setPetOwner_mother(e.target.value)}
							placeholder="Ingresa el apellido materno del dueño"
						/>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Dirección
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="address"
							value={address}
							onChange={e => setAddress(e.target.value)}
							placeholder="Ingresa Dirección, Comuna y Ciudad"
						/>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Teléfono
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							regularExpresion={expresions.phone}
							placeholder="Ingresa el numero de teléfono"
						/>
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Email
					</Form.Label>
					<Col>
						<Form.Control
							type="email"
							name="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							regularExpresion={expresions.email}
							placeholder="Ingresa el correo electrónico"
						/>
					</Col>
				</Form.Row>
				<br />
				<Button className="petBtn" type="submit" size="lg" onClick={handleSubmit}>
					Crear nueva mascota
				</Button>
				<Toast show={showToast} onClose={closeTost} delay={3000} autohide className="mt-4 mx-auto">
					<Toast.Header>
						<strong className="mr-auto">Mascota Registrada</strong>
					</Toast.Header>
					<Toast.Body>Mascota ingresada en forma exitosa</Toast.Body>
				</Toast>
			</Form.Group>
		</div>
	);
};

export default NewPetForm;
