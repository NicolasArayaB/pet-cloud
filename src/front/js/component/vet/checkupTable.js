import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const Checkup = props => {
	let date = "";

	if (props.observations.update != undefined) {
		date = props.observations.update
			.split("-")
			.reverse()
			.join("-");
	}
	return (
		<Table bordered hover>
			<thead className="table-info">
				<tr>
					<th>Último Control</th>
					<th>{date}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Peso: </th>
					<th>{props.observations.weight}</th>
				</tr>
				<tr>
					<th>Enfermedades: </th>
					<th>{props.condition}</th>
				</tr>
				<tr>
					<th>Estado reproductivo: </th>
					<th>{props.genderStatus}</th>
				</tr>
			</tbody>
		</Table>
	);
};

Checkup.propTypes = {
	condition: PropTypes.string,
	observations: PropTypes.object,
	genderStatus: PropTypes.string
};

export default Checkup;
