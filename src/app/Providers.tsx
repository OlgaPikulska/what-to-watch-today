"use client";
import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
