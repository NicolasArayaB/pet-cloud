import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import Context from "../../store/appContext";

const Checkup = props => {
	console.log(props.condition);
	return (
		<Table bordered hover>
			<thead className="table-secondary">
				<tr>
					<th>Ultimo Control</th>
					<th>15/03/2021</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Motivo: </th>
					<th>Control sano</th>
				</tr>
				<tr>
					<th>Peso: </th>
					<th>15 kg</th>
				</tr>
				<tr>
					<th>Enfermedades: </th>
					<th>{props.condition}</th>
				</tr>
				<tr>
					<th>Esterelizado: </th>
					<th>No</th>
				</tr>
				<tr>
					<th>Observaciones: </th>
					<th>Esta sano</th>
				</tr>
			</tbody>
		</Table>
	);
};

Checkup.propTypes = {
	condition: PropTypes.string
};

export default Checkup;
