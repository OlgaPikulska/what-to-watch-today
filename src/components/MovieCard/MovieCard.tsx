"use client";
import { Movie } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

interface MovieCardProps {
	movies: Movie[];
}

export const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {
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
	return (
		<>
			{movies.map((movie: Movie) => (
				<div key={movie.id} onClick={() => handleOpenModal(movie)} className="cursor-pointer">
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

			<Dialog open={isModalOpen} onClose={handleCloseModal}>
				<DialogTitle>{selectedMovie?.title}</DialogTitle>
				<DialogContent>
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
		</>
	);
};
