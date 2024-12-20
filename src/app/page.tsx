"use client";
import useMovies from "@/hooks/useMovies";

interface Movie {
	id: number;
	title: string;
}

const Home = () => {
	const { movies, loading } = useMovies("trending");

	if (loading) return <div>Loading...</div>;

	return (
		<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
			{movies.map((movie: Movie) => (
				<div key={movie.id}>{movie.title}</div>
			))}
		</div>
	);
};
export default Home;
