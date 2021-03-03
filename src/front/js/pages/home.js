import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CarouselVet from "../../js/component/carouselVet";
import CardVet from "../../js/component/cardVet";
import { Container, Row } from "react-bootstrap";
import CardUser from "../component/cardUser";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Pet Cloud</h1>
			<CarouselVet />
			<br />
			<Container>
				<Row>
					<CardVet />
					<CardUser />
				</Row>
			</Container>
		</div>
	);
};
