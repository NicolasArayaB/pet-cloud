import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const Vaccines = props => {
	return (
		<Table bordered hover>
			<thead className="table-secondary">
				<tr>
					<th>Vacunas</th>
					<th>Fecha</th>
					<th>Dosis</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>{props.vaccine}</th>
					<th>{props.date}</th>
					<th>2/3</th>
				</tr>
			</tbody>
		</Table>
	);
};

Vaccines.propTypes = {
	vaccine: PropTypes.string,
	date: PropTypes.string
};

export default Vaccines;
