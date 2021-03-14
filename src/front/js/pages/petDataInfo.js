import React from "react";
import "../../styles/home.scss";
import PetInformation from "../../js/component/petInformation";

export const petDataInfo = () => {
	return (
		<div className="text-center mt-5">
			<PetInformation />
		</div>
	);
};
