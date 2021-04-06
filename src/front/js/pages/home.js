import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import CarouselVet from "../component/home/carouselVet";
import CardVet from "../component/home/cardVet";
import CardUser from "../component/home/cardUser";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="text-center mt-3">
			<h1>Bienvenido a PetCloud</h1>
			<CarouselVet />
			<Container>
				<Row className="mx-5">
					<Col xs={12} md={6} className="mx-auto">
						<CardVet />
					</Col>
					<Col xs={12} md={6}>
						<CardUser />
					</Col>
					<Col>
						<Button className="petBtn btn-lg my-4" href="/register">
							Registrate
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
