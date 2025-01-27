import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Poster } from "@/components/Poster/Poster";

const mockPosterPath = "mockPoster.jpg";
const mockTitle = "Mock Movie";

describe("Poster Component", () => {
	it("should matches the snapshot when poster_path is provided", () => {
		const { container } = render(<Poster poster_path={mockPosterPath} title={mockTitle} />);
		expect(container).toMatchSnapshot();
	});

	it("should matches the snapshot when poster_path is not provided", () => {
		const { container } = render(<Poster poster_path="" title={mockTitle} />);
		expect(container).toMatchSnapshot();
	});

	it("should render the Image component when poster_path is provided", () => {
		const { getByAltText } = render(<Poster poster_path={mockPosterPath} title={mockTitle} />);
		const imageElement = getByAltText(`Poster of ${mockTitle} movie`);
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute(
			"src",
			`/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw200${mockPosterPath}&w=640&q=75`,
		);
		expect(imageElement).toHaveClass("h-[300px] w-[200px] rounded-sm");
	});

	it("should render fallback UI when poster_path is not provided", () => {
		const { getByTestId, getByText } = render(<Poster poster_path="" title={mockTitle} />);

		const iconElement = getByTestId("NoPhotographyOutlinedIcon");
		expect(iconElement).toBeInTheDocument();

		const textElement = getByText("No Poster");
		expect(textElement).toBeInTheDocument();
	});
});
