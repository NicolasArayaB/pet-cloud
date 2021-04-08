import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../styles/home.scss";

const CarouselVet = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className="carrusel-images"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/01-view-home-change-images/src/front/img/veterinary_1.jpg"
						alt="Veterynarian performing controls"
						style={{ height: "500px" }}
					/>
					<Carousel.Caption>
						<h2>Trabaja sin preocupaciones</h2>
						<h5>Tu Veterinario se encarga de la atención de tu mascota, no de los registros clínicos.</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="carrusel-images"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/01-view-home-change-images/src/front/img/pet_user_1.jpg"
						alt="Happy Pet Owner"
						style={{ height: "500px" }}
					/>

					<Carousel.Caption>
						<h2>Tu mascota feliz</h2>
						<h5>Disfruta más la vida, la historia clínica de tu mascota esta en línea.</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="carrusel-images"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/01-view-home-change-images/src/front/img/veterinary_2.jpg"
						alt="Veterynarian caring for a dog"
						style={{ height: "500px" }}
					/>

					<Carousel.Caption>
						<h2>Trabaja sin preocupaciones</h2>
						<h5>El Veterinario se encarga de la atención de tu mascota, no de los registros.</h5>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselVet;
