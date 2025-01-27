import { Logo } from "@/components/Logo/Logo";
import { render } from "@testing-library/react";

describe("Logo Component", () => {
	it("should match the snapshot", () => {
		const { container } = render(<Logo />);
		expect(container).toMatchSnapshot();
	});

	it("should render a link to the homepage", () => {
		const { getByRole } = render(<Logo />);
		const linkElement = getByRole("link");
		expect(linkElement).toHaveAttribute("href", "/");
	});

	it("should render the logo image with the correct attributes", () => {
		const { getByAltText } = render(<Logo />);
		const imageElement = getByAltText("What to watch today logo");
		expect(imageElement).toHaveAttribute(
			"src",
			"/_next/image?url=%2Fheader%2Flogo_what_to_watch_today.jpg&w=256&q=75",
		);
		expect(imageElement).toHaveAttribute("width", "100");
		expect(imageElement).toHaveAttribute("height", "100");
	});
});
