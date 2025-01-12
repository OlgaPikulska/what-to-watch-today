"use client";
import { Genre, Movie } from "@/types";
import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Poster } from "@/components/Poster/Poster";

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

	const mapGenreIdsToNames = (movieIds: number[]): string[] => {
		return movieIds.map(
			(movieId) => genres.find((genre) => genre.id === movieId)?.name || "Unknown genre",
		);
	};

	return (
		<>
			{movies.map((movie: Movie) => (
				<div key={movie.id} onClick={() => handleOpenModal(movie)} className="cursor-pointer">
					<Poster poster_path={movie.poster_path} title={movie.title} />
					<p className="text mt-2 text-sm font-bold uppercase">{movie.title}</p>
					<p className="text-xs text-warning">
						{mapGenreIdsToNames(movie.genre_ids).join(", ")} |{" "}
						<span>{movie.release_date.split("-")[0]}</span>
					</p>
				</div>
			))}

			{selectedMovie && (
				<Dialog open={isModalOpen} onClose={handleCloseModal}>
					<DialogTitle>{selectedMovie.title}</DialogTitle>
					<Poster poster_path={selectedMovie?.poster_path} title={selectedMovie.title} />
					<DialogContent>
						<p>
							<strong>Rating:</strong> {selectedMovie?.vote_average} / 10
						</p>
						<p>
							<strong>Genres:</strong> {mapGenreIdsToNames(selectedMovie?.genre_ids).join(", ")}
						</p>
						<p>
							<strong>Release Date:</strong> {selectedMovie?.release_date}
						</p>
						<p>
							<strong>Overview:</strong> {selectedMovie?.overview || "No description available."}
						</p>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseModal} color="primary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</>
	);
};
