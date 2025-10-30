"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WeatherCard from "./WeatherCard";

type WAResp = {
  location?: { name?: string };
  current?: {
    temp_f?: number;
    feelslike_f?: number;
    condition?: { text?: string; icon?: string };
  };
  error?: { message?: string };
};

export default function WeatherPage() {
  const [city, setCity] = useState("Ottumwa");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<WAResp | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeather(city);
  }, []);

  async function fetchWeather(c: string) {
    try {
      setLoading(true);
      setError("");
      setData(null);

      const res = await fetch(`/api/weather?city=${encodeURIComponent(c)}`);
      const json = (await res.json()) as WAResp;

      if (!res.ok) setError(json?.error?.message || "Failed to load weather.");
      else setData(json);
    } catch (e: any) {
      setError(e?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-sky-300 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        {/* Back to home link */}
        <div className="mb-3 text-sm">
          <Link href="/" className="underline">← Back to Weather Home</Link>
        </div>

        {/* Main content card */}
        <div className="rounded-2xl shadow-xl bg-white/95 backdrop-blur px-6 py-6">
          <h1 className="text-3xl font-extrabold text-center mb-4">Weather</h1>

          {/* Search */}
          <form
            className="flex gap-2 mb-5"
            onSubmit={(e) => {
              e.preventDefault();
              fetchWeather(city);
            }}
          >
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter a city (e.g., Ottumwa)"
              className="flex-1 rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              Search
            </button>
          </form>

          {/* States */}
          {loading && (
            <div className="text-center text-zinc-600">Loading current conditions…</div>
          )}
          {error && (
            <div className="text-center text-red-600 mb-2">{error}</div>
          )}

          {/* Result */}
          {data?.current && (
            <WeatherCard
              city={data.location?.name || city}
              tempF={data.current.temp_f ?? 0}
              feelsLikeF={data.current.feelslike_f ?? 0}
              description={data.current.condition?.text || ""}
              icon={data.current.condition?.icon}
            />
          )}
        </div>
      </div>
    </div>
  );
}
