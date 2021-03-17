import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const NewPetForm = () => {
	return (
		<div>
			<Form.Group>
				<Form.Row>
					<Form.Label column lg={2}>
						Especie
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa la especie" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Raza
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa la raza" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Género
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa el género" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Chip ID
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa el Chip ID" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Nombre Mascota
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa el nombre de la mascota" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Fecha de nacimiento
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa la fecha de nacimiento" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Nombre completo dueño
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa tu nombre completo" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Dirección
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa tu dirección" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Comuna
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa la comuna" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Región
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa la región" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Ciudad
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa la ciudad" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						Teléfono
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa tu numero de teléfono" />
					</Col>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label column lg={2}>
						E-mail
					</Form.Label>
					<Col>
						<Form.Control type="text" placeholder="Ingresa tu correo electrónico" />
					</Col>
				</Form.Row>
				<br />
			</Form.Group>

			<Button variant="primary" type="submit">
				Crear
			</Button>
		</div>
	);
};

export default NewPetForm;
