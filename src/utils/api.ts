import { Genre, Movie } from "@/types";

export const fetchGenres = async (): Promise<Genre[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&language=en`,
	);
	const data = await res.json();
	return data.genres || [];
};

export const fetchMovies = async (
	page: number,
	query: string | string[],
): Promise<{ results: Movie[]; total_pages: number }> => {
	const endpoint = query
		? `${process.env.NEXT_PUBLIC_API_URL}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=${page}`
		: `${process.env.NEXT_PUBLIC_API_URL}/trending/movie/week?api_key=${process.env.API_KEY}`;
	const res = await fetch(endpoint, { cache: "no-store" });
	if (!res.ok) throw new Error("Failed to fetch movies");
	const data = await res.json();
	return { results: data.results || [], total_pages: data.total_pages || 1 };
};
