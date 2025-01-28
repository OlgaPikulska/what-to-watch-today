import { Footer } from "@/components/Footer/Footer";
import { render } from "@testing-library/react";

describe("Footer Component", () => {
	it("should match the snapshot", () => {
		const { container } = render(<Footer />);
		expect(container).toMatchSnapshot();
	});

	it("should render current year", () => {
		const currentYear = new Date().getFullYear().toString();
		const { getByText } = render(<Footer />);

		expect(getByText((content) => content.includes(`© ${currentYear}`))).toBeInTheDocument();
	});
});
