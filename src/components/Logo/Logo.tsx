import React from "react";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import Link from "next/link";

export const Logo: React.FC = () => {
	return (
		<Link href="/">
			<div className="flex gap-2">
				<VideocamOutlinedIcon fontSize="large" />
				<span className="text-3xl">Filmoteka</span>
			</div>
		</Link>
	);
};
