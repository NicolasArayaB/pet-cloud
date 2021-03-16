import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { RegisterView } from "./pages/register";
import { Vet } from "./pages/vet";

import injectContext from "./store/appContext";

import { MyNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contact } from "./pages/contact";
import { Link } from "react-router-dom";
import User from "./pages/user";
import { petDataInfo } from "./pages/petDataInfo";
import { PetInformation } from "./component/petInformation";
import VetInfo from "./pages/vetInformation";
import { ForgottenPass } from "./pages/forgottenPassword";
import { PrivateRoute } from "../js/privateRoute";

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
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={RegisterView} />
						<Route exact path="/vet" component={Vet} />
						<Route exact path="/contactanos" component={Contact} />
						<Route exact path="/user" component={User} />
						<Route exact path="/user/information" component={PetInformation} />
						<Route exact path="/pass" component={ForgottenPass} />
						<Route exact path="/vet/id" component={VetInfo} />
						<Route>
							<div className="text-center">
								<h1>Lo siento, pero Pet Cloud no encuentra esta página</h1>
								<h2>
									Sigue navegando con nosotros{" "}
									<i className="fas fa-paw" style={{ color: "#e37222" }} />
								</h2>
								<Link to="/">
									<button className="btn btn-primary btn-lg" href="#" role="button">
										Volver al Home de Pet cloud
									</button>
								</Link>
							</div>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
