"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navigation: React.FC = () => {
	const pathname = usePathname();

	return (
		// <nav className="flex space-x-6">
		<nav className="block">
			<Link
				href="/"
				className={`${
					pathname === "/" ? "border-b-[3px] border-warning font-bold" : ""
				} mr-6 inline-block text-xs uppercase text-white hover:text-gray-300`}
			>
				Home
			</Link>
			<Link
				href="/library"
				className={`${
					pathname === "/library" ? "border-b-[3px] border-warning font-bold" : ""
				} inline-block text-xs uppercase text-white hover:text-gray-300`}
			>
				My library
			</Link>
		</nav>
	);
};
