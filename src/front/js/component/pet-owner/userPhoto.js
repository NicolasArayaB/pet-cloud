import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const UserPhoto = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<Image
							src="https://cdn4.vectorstock.com/i/thumb-large/40/53/passport-photo-young-handsome-man-close-up-vector-21284053.jpg"
							roundedCircle
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UserPhoto;
