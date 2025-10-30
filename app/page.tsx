import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-blue-100 text-zinc-900">
      {/* Simple header without a Live Weather link */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <h1 className="text-xl font-semibold">Weather Home</h1>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
        {/* Title + intro */}
        <section className="text-center space-y-3">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Welcome to Weather Home
          </h2>
          <p className="text-zinc-600">
            A simple landing page with weather snapshots. Click the button below
            to see live weather
          </p>
        </section>

        {/* Mini Weather Cards (small thumbnails) */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {/* Sunny */}
          <article className="rounded-xl overflow-hidden shadow bg-white w-56 text-center">
            <div className="p-3">
              <Image
                src="/sunny.jpg"
                alt="Sunny"
                width={150}
                height={100}
                className="rounded-md mx-auto"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-lg">Sunny</h3>
              <p className="text-sm text-zinc-600">
                Clear and bright check UV
              </p>
            </div>
          </article>

          {/* Cloudy */}
          <article className="rounded-xl overflow-hidden shadow bg-white w-56 text-center">
            <div className="p-3">
              <Image
                src="/cloudy.jpg"
                alt="Cloudy"
                width={150}
                height={100}
                className="rounded-md mx-auto"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-lg">Cloudy</h3>
              <p className="text-sm text-zinc-600">
                Overcast 
              </p>
            </div>
          </article>

          {/* Rain */}
          <article className="rounded-xl overflow-hidden shadow bg-white w-56 text-center">
            <div className="p-3">
              <Image
                src="/rain.jpg"
                alt="Rain"
                width={150}
                height={100}
                className="rounded-md mx-auto"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-lg">Rainy</h3>
              <p className="text-sm text-zinc-600">
              See precipitation
              </p>
            </div>
          </article>
        </section>

        {/* Single CTA (kept only here at the bottom) */}
        <div className="text-center">
          <Link
            href="/weather"
            className="inline-block rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Go to Live Weather →
          </Link>
        </div>
      </main>
    </div>
  );
}
