import { createTheme } from "@mui/material";

const theme = createTheme({
	cssVariables: true,
	palette: {
		primary: {
			main: "#f57c00",
		},
		secondary: {
			main: "#8c8c8c",
		},
	},
	typography: {
		allVariants: {
			lineHeight: 1.2,
			margin: 0,
		},
		body2: {
			lineHeight: 1.5,
		},
		fontFamily: "var(--font-roboto)",
	},
});

export default theme;
