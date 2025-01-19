"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Typography from "@mui/material/Typography/Typography";

export const Navigation: React.FC = () => {
	const pathname = usePathname();

	return (
		<nav className="block">
			<Link
				href="/"
				className={`${
					pathname === "/" ? "border-b-[3px] border-warning font-bold" : ""
				} mr-6 inline-block uppercase hover:text-warning`}
			>
				<Typography variant="body1">Home</Typography>
			</Link>
			<Link
				href="/library"
				className={`${
					pathname === "/library" ? "border-b-[3px] border-warning font-bold" : ""
				} inline-block uppercase hover:text-warning`}
			>
				<Typography variant="body1">My library</Typography>
			</Link>
		</nav>
	);
};
