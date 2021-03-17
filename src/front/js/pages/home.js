import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CarouselVet from "../component/home/carouselVet";
import CardVet from "../component/home/cardVet";
import { Container, Row } from "react-bootstrap";
import CardUser from "../component/home/cardUser";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<CarouselVet />
			<Container>
				<Row>
					<CardVet />
					<CardUser />
				</Row>
			</Container>
		</div>
	);
};
