import MoviesPagination from "@/components/MoviesPagination/MoviesPagination";
import { fetchGenres } from "@/utils/api";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Home = async ({ searchParams }: { searchParams: SearchParams }) => {
	await searchParams;
	const genres = await fetchGenres();

	return <MoviesPagination genres={genres} />;
};
export default Home;
