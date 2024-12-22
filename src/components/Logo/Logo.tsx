import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import Link from "next/link";

export const Logo: React.FC = () => {
	return (
		<Link href="/">
			<div className="flex gap-2">
				<VideocamIcon />
				Filmoteka
			</div>
		</Link>
	);
};
