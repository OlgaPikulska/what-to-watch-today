import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const geistRoboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["500", "400"],
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
			<body className={`${geistRoboto.variable} flex min-h-screen flex-col font-sans antialiased`}>
				<Header />
				<main className="flex-grow">
					<div className="container">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
