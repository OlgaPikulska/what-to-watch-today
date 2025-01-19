import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo: React.FC = () => {
	return (
		<Link href="/">
			<Image
				src="/header/logo_what_to_watch_today.jpg"
				width={100}
				height={100}
				alt="What to watch today logo"
			/>
		</Link>
	);
};
