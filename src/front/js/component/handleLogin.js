import { Route, Redirect } from "react-router-dom";
import React from "react";

const user_vet = null;

// Get user information and depending on which type of user it is, redirect to the correct view
const HandleLogin = ({ ...userInfo }) => {
	return (
		<div>
			<Route {...userInfo}>{user_vet ? <Redirect to="/vet" /> : <Redirect to="/user" />}</Route>
		</div>
	);
};

export default HandleLogin;