import { NothingFound } from "@/components/NothingFound/NothingFound";
import { render } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { userEvent } from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

describe("NothingFound Component", () => {
	const routerPushMock = jest.fn();

	beforeEach(() => {
		(useRouter as jest.Mock).mockReturnValue({ push: routerPushMock });
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should match the snapshot", () => {
		const { container } = render(<NothingFound />);
		expect(container).toMatchSnapshot();
	});

	it("should render the component correctly", () => {
		const { getByText, getByRole } = render(<NothingFound />);

		expect(getByText("No movies matching your query were found.")).toBeInTheDocument();
		expect(
			getByText("Please go back to the homepage or try a different search."),
		).toBeInTheDocument();

		const button = getByRole("button", { name: "Back to Homepage" });
		expect(button).toBeInTheDocument();
	});

	it("redirects to the homepage when button is clicked", async () => {
		const { getByRole } = render(<NothingFound />);
		const button = getByRole("button", { name: "Back to Homepage" });

		await userEvent.click(button);

		expect(routerPushMock).toHaveBeenCalledTimes(1);
		expect(routerPushMock).toHaveBeenCalledWith("/");
	});
});
