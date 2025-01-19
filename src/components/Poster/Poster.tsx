import React from "react";
import Image from "next/image";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";
import { Movie } from "@/types";
import { Typography } from "@mui/material";

type Poster = Pick<Movie, "poster_path" | "title">;

export const Poster = ({ poster_path, title }: Poster) => {
	return (
		<>
			{poster_path ? (
				<Image
					src={`https://image.tmdb.org/t/p/w200${poster_path}`}
					alt={`Poster of ${title} movie`}
					className="h-[300px] w-[200px] rounded-sm"
					width={200}
					height={300}
				/>
			) : (
				<div className="flex h-[300px] w-[200px] items-center justify-center rounded-sm border border-gray-500 text-gray-500">
					<NoPhotographyOutlinedIcon fontSize="large" />
					<Typography variant="body2" className="mt-2">
						No Poster
					</Typography>
				</div>
			)}
		</>
	);
};
