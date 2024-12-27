import { MovieCard } from "@/components/MovieCard/MovieCard";
import { Movie } from "@/types";
// import { useSearchParams } from "next/navigation";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Home = async ({ searchParams }: { searchParams: SearchParams }) => {
	const params = await searchParams;
	const query = params.query || "";
	let trendingMovies: Movie[] = [];
	const endpoint = query
		? `${process.env.NEXT_PUBLIC_API_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}`
		: // ? `${process.env.NEXT_PUBLIC_API_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${name}&page=${pageNumber}&include_adult=false`
			`${process.env.NEXT_PUBLIC_API_URL}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

	try {
		const res = await fetch(endpoint, { cache: "no-store" });
		if (!res.ok) throw new Error("Failed to fetch trending movies");
		const data = await res.json();
		trendingMovies = data.results || [];
	} catch (error) {
		console.error("Error fetching movies:", error);
	}

	return (
		<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
			<MovieCard movies={trendingMovies} />
		</div>
	);
};
export default Home;
