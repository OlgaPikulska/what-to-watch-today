"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";

export const SearchBox: React.FC = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value;
		setSearchQuery(query);

		if (query.trim() !== "") {
			router.push(`/?query=${query.trim()}`);
		} else {
			router.push(`/`);
		}
	};

	return (
		<TextField
			label="Search movies"
			variant="outlined"
			color="warning"
			value={searchQuery}
			onChange={handleSearchChange}
			sx={{
				"& .MuiOutlinedInput-root": {
					backgroundColor: "transparent",
					color: "white",
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "rgba(255, 255, 255, 0.8)",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "white",
					},
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "warning.main",
					},
				},
				"& .MuiInputLabel-root": {
					color: "white",
				},
				"& .MuiInputLabel-root.Mui-focused": {
					color: "warning.main",
				},
			}}
		/>
	);
};
