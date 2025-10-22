
export default function FeatureCard({
  title,
  description,
}: { title: string; description: string }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white dark:bg-zinc-900">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}
