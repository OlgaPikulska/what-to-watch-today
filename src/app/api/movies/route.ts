import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");
	const page = searchParams.get("page") || "1";

	const endpoint = query
		? `${process.env.NEXT_PUBLIC_API_URL}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=${page}`
		: `${process.env.NEXT_PUBLIC_API_URL}/trending/movie/week?api_key=${process.env.API_KEY}`;

	try {
		const response = await fetch(endpoint);
		const data = await response.json();
		return NextResponse.json(data);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
	}
}
