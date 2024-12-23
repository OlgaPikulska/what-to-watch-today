"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navigation: React.FC = () => {
	const pathname = usePathname();

	return (
		<nav className="flex space-x-6">
			<Link
				href="/"
				className={`${
					pathname === "/" ? "border-warning border-b-2 font-bold" : ""
				} text-white hover:text-gray-300`}
			>
				Home
			</Link>
			<Link
				href="/library"
				className={`${
					pathname === "/library" ? "border-warning border-b-2 font-bold" : ""
				} text-white hover:text-gray-300`}
			>
				My Library
			</Link>
		</nav>
	);
};
