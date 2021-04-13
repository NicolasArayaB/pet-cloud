import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const Vaccines = props => {
	let formattedDate = "";

	if (props.date != undefined) {
		if (props.date[0] != undefined) {
			formattedDate = props.date[0]
				.split("-")
				.reverse()
				.join("-");
		}
		console.log(formattedDate);
	}
	return (
		<Table bordered hover>
			<thead className="table-info">
				<tr>
					<th>Vacunas</th>
					<th>Fecha</th>
					<th>Dosis</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>{props.vaccine}</th>
					<th>{formattedDate}</th>
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
