import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselVet = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="/front/img/veterinary_1.png"
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
						className="d-block w-100"
						src="/pet_user_1.jpg"
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
						className="d-block w-100"
						src="/veterinary_2.jpg"
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
