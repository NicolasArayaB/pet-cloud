const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
                expires: "",
                token: "",
                email: "",
                id: "",
                first_name: ""
            }
		},
		actions: {
            getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const userLocal = JSON.parse(localStorage.getItem("user"));
				setStore({
					user: {
						token: tokenLocal,
						user: userLocal
					}
				});
				console.log("-->", tokenLocal);
				console.log("-->", JSON.stringify(userLocal));
            },
            
            setLogin: user => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ user: data });

						if (typeof Storage !== "undefined") {
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.user));
						} else {
                            // LocalStorage no soportado en este navegador
                            alert("Lo sentimos, tu navegador no es compatible.");
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
		}
	};
};

export default getState;
