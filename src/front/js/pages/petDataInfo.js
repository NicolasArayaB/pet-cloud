import React from "react";
import "../../styles/home.scss";
import PetInformation from "../component/pet-owner/petInformation";

export const petDataInfo = () => {
	return (
		<div className="text-center mt-5">
			<PetInformation />
		</div>
	);
};
