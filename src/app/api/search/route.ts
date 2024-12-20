import { NextResponse } from "next/server";
import { constants } from "@/utils/constants";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");
	const res = await fetch(
		`${constants.API_URL}/search/movie?query=${query}&api_key=${constants.API_KEY}`,
	);
	const data = await res.json();
	return NextResponse.json(data);
}
