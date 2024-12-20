"use client";
import { useState, useEffect } from "react";

const useMovies = (endpoint: string) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchMovies = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/${endpoint}`);
				const data = await res.json();
				setMovies(data.results);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, [endpoint]);

	return { movies, loading };
};

export default useMovies;
