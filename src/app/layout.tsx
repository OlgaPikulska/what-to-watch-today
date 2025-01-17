import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Providers } from "@/app/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["700", "500", "400"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Movie library",
	description: "Application for movie lovers, shows the most popular ones and many, many others.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} flex min-h-screen flex-col font-sans antialiased`}>
				<AppRouterCacheProvider>
					<Providers>
						<Header />
						<main className="flex-grow">
							<div className="container">{children}</div>
						</main>
						<Footer />
					</Providers>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
