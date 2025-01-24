import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const NothingFound = () => {
	const router = useRouter();
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "40vh",
				textAlign: "center",
			}}
		>
			<Typography variant="h6" gutterBottom>
				No movies matching your query were found.
			</Typography>
			<Typography variant="body1" sx={{ marginBottom: 2 }}>
				Please go back to the homepage or try a different search.
			</Typography>
			<Button
				variant="contained"
				onClick={() => router.push("/")}
				size="large"
				sx={{
					color: "#fff",
				}}
			>
				Back to Homepage
			</Button>
		</Box>
	);
};
