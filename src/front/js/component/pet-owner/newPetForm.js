import React, { useContext, useEffect } from "react";
import { Form, Col, Button, Toast } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const newPetForm = () => {
	const { actions } = useContext(Context);
	const [name, setName] = useState("");
	const [identifier, setIdentifier] = useState("");
	const [gender, setGender] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [species, setSpecies] = useState("");
	const [breed, setBreed] = useState("");
	const [petOwnerName, setPetOwnerName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [showToast, setShowToast] = useState(false);

	const toggleShowToast = () => setShowToast(!showToast);

	useEffect(async () => {
		await actions.createNewPet();
	}, []);

	const submitHandler = e => {
		e.preventDefault();

		setValidated(true);
		actions.registerUser(name, identifier, gender, birthDate, species, breed, petOwnerName, phone, email);
		toggleShowToast();
	};

	const closeTost = () => {
		toggleShowToast();
		setRedirect(true);
	};

	return (
		<div>
			<Form.Group onSubmit={e => submitHandler(e)}>
				<span>{JSON.stringify(store.pets)}</span>
				<Toast show={showToast} onClose={closeTost} delay={3000} autohide className="mt-4 mx-auto">
					<Toast.Header>
						<strong className="mr-auto">Mascota Registrada</strong>
					</Toast.Header>
					<Toast.Body>Mascota ingresada en forma exitosa</Toast.Body>
				</Toast>
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
							<option>Dog</option>
							<option>Cat</option>
							<option>Other</option>
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
				<hr />
				<Form.Row>
					<Form.Label column lg={2}>
						Nombre completo dueño
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="petOwnerName"
							value={petOwnerName}
							onChange={e => setPetOwnerName(e.target.value)}
							placeholder="Ingresa el nombre completo del dueño"
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
							placeholder="Ingresa el correo electrónico"
						/>
					</Col>
				</Form.Row>
				<br />
			</Form.Group>
			<Button className="petBtn" type="submit">
				Crear nueva mascota
			</Button>
		</div>
	);
};
