import React from "react";

type MovieDetailsProps = {
	movieDetails: { label: string; value: React.ReactNode }[];
};

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movieDetails }) => (
	<div className="flex gap-10">
		<ul>
			{movieDetails.map((details, index) => (
				<li key={`label-${index}`} className="text-lightGrey text-sm">
					{details.label}
				</li>
			))}
		</ul>
		<ul>
			{movieDetails.map((details, index) => (
				<li key={`value-${index}`} className="text-sm">
					<strong>{details.value}</strong>
				</li>
			))}
		</ul>
	</div>
);
