import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Link to="/" className="footerLink">
			Home
		</Link>
		<span className="footerLink">|</span>
		<Link to="/services" className="footerLink">
			Servicios
		</Link>
		<span className="footerLink">|</span>
		<Link to="/contact-us" className="footerLink">
			Contactanos
		</Link>
	</footer>
);
