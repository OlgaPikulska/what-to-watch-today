"use client";
import { Logo } from "@/components/Logo/Logo";
import { Navigation } from "@/components/Navigation/Navigation";
import { SearchBox } from "@/components/SearchBox/SearchBox";
import React from "react";

export const Header: React.FC = () => {
	return (
		<header className="bg-gray-800 bg-header-mobile bg-cover bg-center sm:bg-header-tablet lg:bg-header-desktop">
			<div className="container flex flex-col gap-5 py-[70px]">
				<div className="flex items-center justify-between text-white">
					<Logo />
					<Navigation />
				</div>
				<div className="mt-4 flex justify-center">
					<SearchBox />
				</div>
			</div>
		</header>
	);
};
