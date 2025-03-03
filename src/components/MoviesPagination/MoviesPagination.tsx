"use client";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { NothingFound } from "@/components/NothingFound/NothingFound";
import { Genre } from "@/types";
import { Typography, Pagination } from "@mui/material";
import Box from "@mui/material/Box/Box";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useSearchParams, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface MoviesPaginationProps {
	genres: Genre[];
}

const MoviesPagination = ({ genres }: MoviesPaginationProps) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [page, setPage] = useState(1);
	const query = searchParams.get("query") || "";
	const currentPage = Number(searchParams.get("page")) || 1;

	useEffect(() => {
		setPage(currentPage);
	}, [currentPage]);

	const { data, error, isLoading } = useSWR(
		query ? `/api/movies?query=${query}&page=${page}` : "/api/movies",
		fetcher,
	);

	const movies = data?.results || [];
	const totalPages = data?.total_pages || 1;

	const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
		setPage(value);
		router.push(`/?query=${query}&page=${value}`);
	};

	if (error) {
		return (
			<Typography className="text-center text-red-500" sx={{ marginTop: "40px" }}>
				Failed to load movies. Please refresh page.
			</Typography>
		);
	}

	return isLoading ? (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "40vh",
				width: "100%",
			}}
		>
			<CircularProgress color="primary" />
		</Box>
	) : movies.length === 0 ? (
		<NothingFound />
	) : (
		<>
			<div className="grid auto-cols-[200px] grid-cols-[repeat(auto-fill,_200px)] justify-center gap-4 p-4">
				<MovieCard movies={movies} genres={genres} />
			</div>
			{query && (
				<Box sx={{ display: "flex", justifyContent: "center", marginY: "15px" }}>
					<Pagination count={totalPages} color="primary" page={page} onChange={handlePageChange} />
				</Box>
			)}
		</>
	);
};

export default MoviesPagination;
