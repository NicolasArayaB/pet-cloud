import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Context from "../store/appContext";

import Checkup from "../component/vet/checkupTable";
import Vaccines from "../component/vet/vaccinesTable";


const VetInfo = () => {
	useEffect(() => actions.getPetById(props.location.state));

    const { store, actions } = useContext(Context);
    
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
