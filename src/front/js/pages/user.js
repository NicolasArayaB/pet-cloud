import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserFiles from "../component/pet-owner/userFiles";
import UserPhoto from "../component/pet-owner/userPhoto";

function User() {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						{" "}
						<UserPhoto />
					</Col>
					<Col />
					<Col />
				</Row>
				<Row>
					<Col>
						<UserFiles />
					</Col>
					<Col />
					<Col />
				</Row>
			</Container>
		</div>
	);
}

export default User;
