import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserFiles from "../../js/component/userFiles";
import UserPhoto from "../../js/component/userPhoto";
import UserData from "../../js/component/userData";

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
