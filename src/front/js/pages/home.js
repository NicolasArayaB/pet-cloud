import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

import CarouselVet from "../component/home/carouselVet";
import CardVet from "../component/home/cardVet";
import CardUser from "../component/home/cardUser";
import "../../styles/home.scss";

import Welcome from "../component/home/welcome";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-3">
			<h1 className="brand-title">Bienvenido a PetCloud</h1>
			{/* <CarouselVet /> */}
			<Welcome />
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
							Regístrate
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
