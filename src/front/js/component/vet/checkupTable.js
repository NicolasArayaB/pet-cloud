import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const Checkup = props => {
	return (
		<Table bordered hover>
			<thead className="table-secondary">
				<tr>
					<th>Ultimo Control</th>
					<th>{props.observations.update}</th>
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
	observations: PropTypes.string,
	genderStatus: PropTypes.string
};

export default Checkup;
