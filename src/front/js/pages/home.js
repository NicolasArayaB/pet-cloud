import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CarouselVet from "../component/home/carouselVet";
import CardVet from "../component/home/cardVet";
import { Container, Row, Col } from "react-bootstrap";
import CardUser from "../component/home/cardUser";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-3">
			<CarouselVet />
			<Container>
				<Row className="justify-content-center mx-5">
					<Col xs={12} md={6}>
						<CardVet />
					</Col>
					<Col xs={12} md={6}>
						<CardUser />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
