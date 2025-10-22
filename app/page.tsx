import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center text-center gap-6">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          Welcome to My Personal Project
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Explore my project pages below.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/plan"
            className="underline text-blue-600 hover:text-blue-800"
          >
            View Project Plan (Public)
          </Link>
          <Link
            href="/members"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Members Area (Login Required)
          </Link>
        </div>
      </main>
    </div>
  );
}
