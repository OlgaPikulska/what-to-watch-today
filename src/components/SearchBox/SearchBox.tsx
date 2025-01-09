"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { IconButton, InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

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

	const handleClear = () => {
		setSearchQuery("");
		router.push(`/`);
	};

	return (
		<TextField
			label="Search movies"
			variant="outlined"
			color="warning"
			value={searchQuery}
			onChange={handleSearchChange}
			slotProps={{
				input: {
					endAdornment: searchQuery && (
						<InputAdornment position="end">
							<IconButton
								onClick={handleClear}
								edge="end"
								aria-label="clear search query"
								size="small"
							>
								<ClearIcon fontSize="small" sx={{ color: "white" }} />
							</IconButton>
						</InputAdornment>
					),
				},
			}}
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
