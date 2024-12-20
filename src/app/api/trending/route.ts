import { NextResponse } from "next/server";
import { constants } from "@/utils/constants";

export async function GET() {
	const res = await fetch(`${constants.API_URL}/trending/movie/day?api_key=${constants.API_KEY}`);
	const data = await res.json();
	return NextResponse.json(data);
}
