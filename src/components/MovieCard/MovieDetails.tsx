import { Typography } from "@mui/material";
import React from "react";

type MovieDetailsProps = {
	movieDetails: { label: string; value: React.ReactNode }[];
};

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movieDetails }) => (
	<div className="flex gap-10">
		<ul>
			{movieDetails.map((details, index) => (
				<li key={`label-${index}`}>
					<Typography variant="body2" color="secondary.main">
						{details.label}
					</Typography>
				</li>
			))}
		</ul>
		<ul>
			{movieDetails.map((details, index) => (
				<li key={`value-${index}`}>
					<Typography variant="body2" sx={{ fontWeight: 700 }}>
						{details.value}
					</Typography>
				</li>
			))}
		</ul>
	</div>
);
