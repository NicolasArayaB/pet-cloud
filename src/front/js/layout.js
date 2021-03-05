import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { LoginView } from "./pages/login";
import { Admin } from "./pages/admin";

import injectContext from "./store/appContext";

import { MyNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contact } from "./pages/contact";
import { Link } from "react-router-dom";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNavbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<LoginView />
						</Route>
						<Route exact path="/admin">
							<Admin />
						</Route>
						<Route exact path="/contactanos">
							<Contact />
						</Route>
						<Route>
							<h1>
								Lo siento, pero Pet Cloud no encuentra esta página
								<br />
								<Link to="/">
									<span className="btn btn-primary btn-lg" href="#" role="button">
										Volver al Home de Pet cloud
									</span>
								</Link>
							</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
