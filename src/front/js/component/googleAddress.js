import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import "../../styles/user.scss";
// import { Form } from "react-bootstrap";

const GoogleAddress = () => {
	const [address, setAddress] = useState("");

	const handleSelect = async () => {};

	return (
		<div>
			<PlacesAutocomplete
				type="text"
				name="address"
				value={address}
				onChange={setAddress}
				onSelect={handleSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							className="google-address-input rounded"
							{...getInputProps({ placeholder: "Escribe la dirección del dueño ... " })}
						/>
						<div>
							{loading ? <div>...cargando sugerencias</div> : null}
							<img
								src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
								alt="Powered by Google"
							/>
							{suggestions.map(suggestion => {
								const style = {
									backgroundColor: suggestion.active ? "#66B9BF" : "#fff"
								};
								return (
									<div key={suggestion} {...getSuggestionItemProps(suggestion, { style })}>
										{suggestion.description}
									</div>
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		</div>
	);
};
export default GoogleAddress;
