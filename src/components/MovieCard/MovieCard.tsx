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
							src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
							alt={`Poster of ${movie.title} movie`}
							width={300}
							height={398}
						/>
					) : (
						<div className="flex h-[398px] w-[276px] flex-col items-center justify-center border border-gray-500 text-gray-500">
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
