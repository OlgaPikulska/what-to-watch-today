import { MovieCard } from "@/components/MovieCard/MovieCard";
import { Genre, Movie } from "@/types";

const fetchGenres = async (): Promise<Genre[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&language=en`,
	);
	const data = await res.json();
	return data.genres || [];
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Home = async ({ searchParams }: { searchParams: SearchParams }) => {
	const params = await searchParams;
	const query = params.query || "";
	let trendingMovies: Movie[] = [];
	const endpoint = query
		? `${process.env.NEXT_PUBLIC_API_URL}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}`
		: // ? `${process.env.NEXT_PUBLIC_API_URL}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${name}&page=${pageNumber}&include_adult=false`
			`${process.env.NEXT_PUBLIC_API_URL}/trending/movie/week?api_key=${process.env.API_KEY}`;

	try {
		const res = await fetch(endpoint, { cache: "no-store" });
		if (!res.ok) throw new Error("Failed to fetch trending movies");
		const data = await res.json();
		trendingMovies = data.results || [];
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
	const genres = await fetchGenres();

	return (
		<div className="grid auto-cols-[200px] grid-cols-[repeat(auto-fill,_200px)] justify-center gap-4 p-4">
			<MovieCard movies={trendingMovies} genres={genres} />
		</div>
	);
};
export default Home;
