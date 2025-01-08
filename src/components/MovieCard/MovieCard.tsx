import { Movie } from "@/types";
import React from "react";
import Image from "next/image";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";

interface MovieCardProps {
	movies: Movie[];
}

export const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {
	return (
		<>
			{movies.map((movie: Movie) => (
				<div key={movie.id}>
					{movie.poster_path ? (
						<Image
							src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
							alt={`Poster of ${movie.title} movie`}
							className="rounded-sm"
							width={200}
							height={300}
						/>
					) : (
						<div className="flex aspect-[200/300] w-full max-w-[200px] items-center justify-center rounded-sm border border-gray-500 text-gray-500">
							<NoPhotographyOutlinedIcon fontSize="large" />
							<span className="mt-2 text-sm">No Poster</span>
						</div>
					)}
					<p className="text mt-2 text-sm font-bold uppercase">{movie.title}</p>
					<p className="text-warning">{movie.release_date.split("-")[0]}</p>
				</div>
			))}
		</>
	);
};
