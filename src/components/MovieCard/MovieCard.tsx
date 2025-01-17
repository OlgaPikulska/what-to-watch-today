"use client";
import { Genre, Movie } from "@/types";
import React, { useState } from "react";
import { Tooltip, Typography } from "@mui/material";
import { Poster } from "@/components/Poster/Poster";
import MovieDetailsDialog from "@/components/MovieDetailsDialog/MovieDetailsDialog";

interface MovieCardProps {
	movies: Movie[];
	genres: Genre[];
}

export const MovieCard: React.FC<MovieCardProps> = ({ movies, genres }) => {
	const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = (movie: Movie) => {
		setSelectedMovie(movie);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setSelectedMovie(null);
		setIsModalOpen(false);
	};

	const mapGenreIdsToNames = (movieIds: number[]): string => {
		return movieIds
			.map((movieId) => genres.find((genre) => genre.id === movieId)?.name || "Unknown genre")
			.join(", ");
	};

	return (
		<>
			{movies.map((movie: Movie) => (
				<div key={movie.id}>
					<Tooltip title="Click to see more details" arrow placement="top-end">
						<button
							onClick={() => handleOpenModal(movie)}
							className="cursor-pointer"
							aria-label={`Click to see more details of movie: ${movie.title}`}
						>
							<Poster poster_path={movie.poster_path} title={movie.title} />
						</button>
					</Tooltip>
					<Typography variant="subtitle2" className="uppercase">
						{movie.title}
					</Typography>
					<Typography variant="caption" color="primary.main">
						{mapGenreIdsToNames(movie.genre_ids)} | <span>{movie.release_date.split("-")[0]}</span>
					</Typography>
				</div>
			))}

			{selectedMovie && (
				<MovieDetailsDialog
					title={selectedMovie.title}
					poster_path={selectedMovie.poster_path}
					vote_average={selectedMovie.vote_average}
					popularity={selectedMovie.popularity}
					release_date={selectedMovie.release_date}
					overview={selectedMovie.overview}
					open={isModalOpen}
					onClose={handleCloseModal}
					genres={mapGenreIdsToNames(selectedMovie.genre_ids)}
				/>
			)}
		</>
	);
};
