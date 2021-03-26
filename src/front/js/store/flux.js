const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			login: [],
			users: [],
			message: {}
		},
		actions: {
			setLogin: user => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ login: data });
						if (typeof Storage !== "undefined") {
							console.log(data.token, "---> data.token");
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.user));
							localStorage.setItem("first_name", JSON.stringify(data.first_name));
						} else {
							// LocalStorage no soportado en este navegador
							alert("Lo sentimos, tu navegador no es compatible.");
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const userLocal = JSON.parse(localStorage.getItem("user"));
				const firstNameLocal = JSON.parse(localStorage.getItem("first_name"));
				setStore({
					login: {
						token: tokenLocal,
						user: userLocal,
						firstName: firstNameLocal
					}
				});
				console.log("-->", tokenLocal);
				console.log("-->", JSON.stringify(userLocal));
			}
		}
	};
};

export default getState;
