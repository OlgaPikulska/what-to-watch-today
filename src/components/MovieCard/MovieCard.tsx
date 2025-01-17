"use client";
import { Genre, Movie } from "@/types";
import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Tooltip,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Poster } from "@/components/Poster/Poster";
import { MovieDetails } from "@/components/MovieCard/MovieDetails";

interface MovieCardProps {
	movies: Movie[];
	genres: Genre[];
}

export const MovieCard: React.FC<MovieCardProps> = ({ movies, genres }) => {
	const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	console.log(isSmallScreen);

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
				<div key={movie.id}>
					<Tooltip title="Click to see more details" arrow>
						<button
							onClick={() => handleOpenModal(movie)}
							className="cursor-pointer"
							aria-label={`Click to see more details of movie: ${movie.title}`}
						>
							<Poster poster_path={movie.poster_path} title={movie.title} />
						</button>
					</Tooltip>
					<h2 className="text text-sm font-bold uppercase">{movie.title}</h2>
					<p className="text-xs text-warning">
						{mapGenreIdsToNames(movie.genre_ids).join(", ")} |{" "}
						<span>{movie.release_date.split("-")[0]}</span>
					</p>
				</div>
			))}

			{selectedMovie && (
				<Dialog
					maxWidth="sm"
					open={isModalOpen}
					onClose={handleCloseModal}
					fullScreen={isSmallScreen}
				>
					<DialogTitle className="text-3xl">{selectedMovie.title}</DialogTitle>
					<DialogContent className="flex flex-col items-center gap-6 sm:flex-row">
						<Poster poster_path={selectedMovie?.poster_path} title={selectedMovie.title} />
						<div>
							<MovieDetails
								movieDetails={[
									{ label: "Vote / Votes:", value: `${selectedMovie.vote_average} / 10` },
									{ label: "Popularity:", value: `${selectedMovie.popularity}` },
									{
										label: "Genres:",
										value: selectedMovie && mapGenreIdsToNames(selectedMovie.genre_ids).join(", "),
									},
									{ label: "Release Date:", value: selectedMovie.release_date },
								]}
							/>
							<strong className="mt-5 block uppercase">Overview</strong>
							<p> {selectedMovie?.overview || "No description available."}</p>
						</div>
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
