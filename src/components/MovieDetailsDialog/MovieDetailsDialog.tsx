import { MovieDetails } from "@/components/MovieCard/MovieDetails";
import { Poster } from "@/components/Poster/Poster";
import { Movie } from "@/types";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";
type MovieDetailsDialogProps = Pick<
	Movie,
	"title" | "poster_path" | "vote_average" | "popularity" | "release_date" | "overview"
> & {
	open: boolean;
	onClose: () => void;
	genres: string;
};

const MovieDetailsDialog = ({
	title,
	poster_path,
	vote_average,
	popularity,
	genres,
	release_date,
	overview,
	open,
	onClose,
}: MovieDetailsDialogProps) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Dialog maxWidth="sm" open={open} onClose={onClose} fullScreen={isSmallScreen}>
			<DialogTitle className="text-3xl">{title}</DialogTitle>
			<DialogContent className="flex flex-col items-center gap-6 sm:flex-row">
				<Poster poster_path={poster_path} title={title} />
				<div>
					<MovieDetails
						movieDetails={[
							{ label: "Vote / Votes:", value: `${vote_average} / 10` || "-" },
							{ label: "Popularity:", value: `${popularity}` || "-" },
							{
								label: "Genres:",
								value: genres || "-",
							},
							{ label: "Release Date:", value: release_date || "-" },
						]}
					/>
					<Typography variant="subtitle2" className="uppercase" sx={{ mt: 4, fontWeight: 700 }}>
						Overview
					</Typography>
					<Typography variant="body2">{overview || "No description available."}</Typography>
				</div>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default MovieDetailsDialog;
