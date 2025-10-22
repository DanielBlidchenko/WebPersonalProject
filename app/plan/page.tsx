import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

export default function PlanPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">MyPersonal Project Plan</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Things to do. What this is going to be is like a weather channel.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <FeatureCard
          title="Auth-protected area"
          description="using Amplify Auth."
        />
        <FeatureCard
          title="External API"
          description="Fetch data server-side and store API key in env,
          Going to make a weather website and an api 
          showing weather where ever you want."
        />
        <FeatureCard
          title="Dynamic UI"
          description="State-driven components with useState and useEffect."
        />
        <FeatureCard
          title="Tailwind Styling"
          description="Consistent styling and responsive layout."
        />
      </div>

      <Link className="underline" href="/">
         Back to Home
      </Link>
    </main>
  );
}
