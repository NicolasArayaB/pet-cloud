// import { Route, Redirect } from "react-router-dom";
// import React from "react";

// const user_vet = null;

// const PrivateRoute = ({ component: Component, ...rest }) => {
// 	return (
// 		<div>
// 			<Route {...rest}>{user ? <Component /> : <Redirect to="/user" />}</Route>
// 			<Route {...rest}>{user_vet ? <Component /> : <Redirect to="/vet" />}</Route>
// 		</div>
// 	);
// };

// export default PrivateRoute;

// import { useState } from "react";

// export default function useToken() {
// 	const getToken = () => {
// 		const tokenString = localStorage.getItem("token");
// 		const userToken = JSON.parse(tokenString);
// 		let temp = userToken;
// 		return temp == null || temp == undefined ? undefined : temp.token;
// 	};

// 	const [token, setToken] = useState(getToken());

// 	const saveToken = userToken => {
// 		localStorage.setItem("token", JSON.stringify(userToken));
// 		localStorage.setItem("is_vet", JSON.stringify(data.is_vet));
// 		setToken(userToken.token);
// 	};

// 	return {
// 		setToken: saveToken,
// 		token
// 	};
// }
