import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const Checkup = props => {
	let date = "";

	if (props.update != undefined) {
		date = props.update
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
					<th>{props.weight}</th>
				</tr>
				<tr>
					<th>Diagnóstico: </th>
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
	update: PropTypes.string,
	weight: PropTypes.integer,
	genderStatus: PropTypes.string
};

export default Checkup;
