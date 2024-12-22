import React from "react";
import TextField from "@mui/material/TextField";

export const SearchBox: React.FC = () => {
	return (
		<div>
			<TextField
				id="standard-basic"
				label="Search movies"
				variant="standard"
				color="warning"
				sx={{
					input: { color: "white" }, // Kolor tekstu
					"& .MuiInputLabel-root": { color: "white" }, // Kolor etykiety
					"& .MuiInput-underline:before": {
						borderBottomColor: "white", // Kolor obwódki przed focus
						transition: "none",
					},
					"& .MuiInput-underline:hover:before": {
						borderBottomColor: "white", // Kolor obwódki podczas hover
						transition: "none",
					},
					"& .MuiInput-underline:after": {
						borderBottomColor: "warning", // Pomarańczowy kolor na focus
					},
				}}
			/>
		</div>
	);
};
