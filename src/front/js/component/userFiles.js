import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const UserFiles = () => {
	return (
		<div>
			<Accordion>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="0">
							Mi Mascota
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>Nombre</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="1">
							Mis Controles
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Vacunas</Card.Body>
					</Accordion.Collapse>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Examenes</Card.Body>
					</Accordion.Collapse>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Otros</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};

export default UserFiles;
