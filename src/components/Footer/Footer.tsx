import { Typography } from "@mui/material";

export const Footer: React.FC = () => {
	const currentYear: number = new Date().getFullYear();
	return (
		<footer className="bg-footer p-4 text-center">
			<Typography variant="subtitle1" color="secondary.dark">
				{`© ${currentYear} | All Rights Reserved | Created by`}{" "}
				<span className="font-bold">Olga Pikulska</span>
			</Typography>
		</footer>
	);
};
