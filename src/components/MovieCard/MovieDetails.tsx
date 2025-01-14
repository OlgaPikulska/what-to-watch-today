type MovieDetailsProps = {
	label: string;
	value: React.ReactNode;
};

export const MovieDetails: React.FC<MovieDetailsProps> = ({ label, value }) => (
	<div className="flex justify-between">
		<strong className="font-semibold text-footertext">{label}</strong>
		<span className="">{value}</span>
	</div>
);
