import React from "react";
import { Table } from "react-bootstrap";

const Checkup = () => {
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
					<th>Ninguna</th>
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

export default Checkup;
