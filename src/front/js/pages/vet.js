import React, { useState, useEffect } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import "../../styles/vet.scss";
import VetInfo from "./vetInformation";

export const Vet = props => {
	const [showInfo, setShowInfo] = useState(false);
	const [chip, setChip] = useState(null);

	useEffect(() => {
		if (props.location.state) {
			setChip(props.location.state.chip);
			setShowInfo(true);
		}
	}, []);

	return (
		<Container className="search-form">
			<section>
				<Row className="text-right">
					<Col>
						<Button className="petBtn new-pet my-1" href="/newPet">
							Nueva Mascota
						</Button>
					</Col>
				</Row>
				<Row className="text-center my-5">
					<Col xs={12} className="mb-3">
						<h3>Buscar por chip de la mascota</h3>
					</Col>
					<Col xs={7} sm={5} className="mx-auto">
						<InputGroup className="mb-3">
							<FormControl
								onChange={e => setChip(e.target.value)}
								placeholder="Chip mascota"
								aria-label="pet id"
								aria-describedby="search-addon1"
							/>
							<InputGroup.Append>
								<Button type="button" className="search-btn" onClick={() => setShowInfo(true)}>
									<InputGroup.Text id="search-addon1">&#128269;</InputGroup.Text>
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
				</Row>
			</section>
			<section>{showInfo ? <VetInfo chip={chip} /> : ""}</section>
		</Container>
	);

	Vet.propTypes = {
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
			state: PropTypes.object.isRequired
		}).isRequired
	};
};
