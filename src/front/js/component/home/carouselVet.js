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
						<h3>Trabaja sin preocupaciones</h3>
						<p>Tu Veterinario se encarga de la atención de tu mascota, no de los registros clínicos.</p>
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
						<h3>Tu mascota feliz</h3>
						<p>Disfruta más la vida, la historia clínica de tu mascota esta en línea.</p>
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
						<h3>Trabaja sin preocupaciones</h3>
						<p>El Veterinario se encarga de la atención de tu mascota, no de los registros.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselVet;
