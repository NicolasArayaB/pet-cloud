import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Checkup from "../component/checkupTable";
import Vaccines from "../component/vaccinesTable";

const VetInfo = () => {
	return (
		<Container>
			{/* Hay que sacar estos datos de la db */}
			<Row className="m-3">
				<Col />
				<Col className="text-center">
					<h2>Cachupin</h2>
				</Col>
				<Col>
					<Button className="petBtn float-right">Nuevo Control</Button>
				</Col>
			</Row>
			<Row className="m-3">
				<Col className="text-center">
					<p>Perro | Chilean Terrier | Macho | 5 años | Jugueton</p>
				</Col>
			</Row>
			<Row className="m-3">
				<Col md={6}>
					<Checkup />
				</Col>
				<Col md={6}>
					<Vaccines />
				</Col>
			</Row>
		</Container>
	);
};

export default VetInfo;
