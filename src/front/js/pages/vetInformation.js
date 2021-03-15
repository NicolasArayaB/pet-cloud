import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import CheckupCard from "../component/checkupCard";
import Vaccines from "../component/vaccinesCard";

const VetInfo = () => {
	return (
		<Container>
			{" "}
			{/* Hay que sacar este dato de la db */}
			<Row>
				<Col>
					<h2>Cachupin</h2>
				</Col>
				<Col>
					<Button className="petBtn">Nuevo Control</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Perro | Chilean Terrier | Macho | 5 años | Jugueton</h4>
				</Col>
			</Row>
			<Row>
				<CheckupCard />
				<Vaccines />
			</Row>
		</Container>
	);
};

export default VetInfo;
