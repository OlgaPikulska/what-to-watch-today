"use client";
import { Logo } from "@/components/Logo/Logo";
import { Navigation } from "@/components/Navigation/Navigation";
import { SearchBox } from "@/components/SearchBox/SearchBox";
import React from "react";

export const Header: React.FC = () => {
	return (
		<header className="flex flex-col gap-5 bg-gray-800 bg-header-mobile bg-cover bg-center p-[70px] text-white sm:bg-header-tablet lg:bg-header-desktop">
			<div className="flex justify-between">
				<Logo />
				<Navigation />
			</div>
			<div className="mt-4 flex justify-center">
				<SearchBox />
			</div>
		</header>
	);
};
