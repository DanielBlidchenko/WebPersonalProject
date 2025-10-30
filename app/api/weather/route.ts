import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city") || "Ottumwa";
    const apiKey = process.env.WEATHERAPI_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ message: "Missing API key" }), {
        status: 500,
      });
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
      city
    )}&aqi=no`;

    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();

    if (!response.ok) {
      const message =
        data?.error?.message || "Weather API returned an error.";
      return new Response(JSON.stringify({ message }), {
        status: response.status,
      });
    }

    return Response.json(data);
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err?.message || "Unknown error" }), {
      status: 500,
    });
  }
}
