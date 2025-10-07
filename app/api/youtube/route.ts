import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  const apiKey = process.env.YT_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=relevance&q=${query}&relevanceLanguage=pt&type=video&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to fetch data from YouTube API" },
      { status: 500 }
    );
  }
}
