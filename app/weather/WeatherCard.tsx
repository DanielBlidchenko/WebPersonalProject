type Props = {
  city: string;
  tempF: number;
  feelsLikeF: number;
  description: string;
  icon?: string;
};

export default function WeatherCard({ city, tempF, feelsLikeF, description, icon }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex items-center gap-4">
        {icon && (
          <img
            src={icon}
            alt={description}
            className="w-14 h-14"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold leading-tight">{city}</h2>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-blue-50 p-4 text-center">
          <div className="text-sm text-zinc-600">Temperature</div>
          <div className="text-3xl font-semibold">{Math.round(tempF)}°F</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-sm text-zinc-600">Feels like</div>
          <div className="text-3xl font-semibold">{Math.round(feelsLikeF)}°F</div>
        </div>
      </div>
    </div>
  );
}
