import { Route, Redirect } from "react-router-dom";
import React from "react";

const user_vet = null;

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<div>
			<Route {...rest}>{user_vet ? <Component /> : <Redirect to="/register" />}</Route>
		</div>
	);
};

export default PrivateRoute;
