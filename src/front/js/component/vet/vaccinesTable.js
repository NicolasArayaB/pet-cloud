import React from "react";
import { Table } from "react-bootstrap";

const Vaccines = () => {
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
					<th>Antirrábica</th>
					<th>27/03/20</th>
					<th>2/3</th>
				</tr>
				<tr>
					<th>Leptospirosis</th>
					<th>20/01/20</th>
					<th>1/1</th>
				</tr>
				<tr>
					<th>Desparasitante</th>
					<th>05/11/19</th>
					<th>3/3</th>
				</tr>
			</tbody>
		</Table>
	);
};
export default Vaccines;
