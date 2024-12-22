import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			backgroundImage: {
				"header-desktop": "url(/header/header-home-desktop.jpg)",
				"header-tablet": "url(/header/header-home-tablet.jpg)",
				"header-mobile": "url(/header/header-home-mobile.jpg)",
			},
		},
	},
	plugins: [],
} satisfies Config;
