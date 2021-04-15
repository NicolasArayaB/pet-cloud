import React, { useContext, useState } from "react";
import { Form, Col, Button, Row, InputGroup } from "react-bootstrap";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";
import { string } from "prop-types";
import Swal from "sweetalert2";

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
	const [redirect, setRedirect] = useState("");

	const expresions = {
		identifier: /^\d{15}$/, // 15 numbers
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{9}$/ // 9 numbers
	};

	const handleSubmit = e => {
		e.preventDefault();

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

		console.log("Submitted");
		if (
			gender == "" ||
			birthDate == "" ||
			species == "" ||
			breed == "" ||
			genderStatus == "" ||
			petOwner_name == "" ||
			petOwner_mother == "" ||
			petOwner_father == "" ||
			address == ""
		) {
			ShowAlert.fire({
				icon: "info",
				title: "Todos los campos son requeridos."
			});
		} else if (identifier.length != 15) {
			ShowAlert.fire({
				icon: "info",
				title: "El CHIP debe tener sólo 15 digitos."
			});
		} else if (email != email.match(expresions.email)) {
			ShowAlert.fire({
				icon: "info",
				title: "Digitar formato correcto del mail ejemplo@gmail.com"
			});
		} else if (phone != phone.match(expresions.phone)) {
			ShowAlert.fire({
				icon: "info",
				title: "Digitar formato correcto del teléfono"
			});
		} else if (
			identifier == identifier.match(expresions.identifier) &&
			email == email.match(expresions.email) &&
			phone == phone.match(expresions.phone)
		) {
			actions.fhirNewPet(
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
			actions.petCloudNewPet(name, identifier, email);
			ShowAlert.fire({
				icon: "success",
				title: "Mascota ingresada en forma exitosa."
			});
			setRedirect(true);
			console.log("You have an error");
		}
	};

	return (
		<div>
			{redirect ? <Redirect to="/vet" /> : ""}
			<Form.Group autoComplete="off">
				<Row className="text-center">
					<Col xs={12} md={12}>
						<h3
							className="nombre mt-5 text-center"
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
						Chip Id
					</Form.Label>
					<Col>
						<Form.Control
							type="text"
							name="identifier"
							value={identifier}
							onChange={e => setIdentifier(e.target.value)}
							placeholder="Ingresa el Chip Id"
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
						<InputGroup className="mb-2">
							<InputGroup.Prepend>
								<InputGroup.Text>+56</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control
								type="text"
								name="phone"
								value={phone}
								onChange={e => setPhone(e.target.value)}
								placeholder="XXXXXXXXX"
							/>
						</InputGroup>
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
				<Row>
					<Col className="text-center">
						<Button className="petBtn my-5" type="submit" size="lg" onClick={handleSubmit}>
							Registrar una nueva mascota
						</Button>
					</Col>
				</Row>
			</Form.Group>
		</div>
	);
};

export default NewPetForm;
