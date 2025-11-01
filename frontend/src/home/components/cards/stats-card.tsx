import { cn } from "@/shared/lib/utils";

export default function StatsCard({
  title,
  image,
  ethValue,
  percentChange,
}: {
  title: string;
  image: string;
  ethValue: number;
  percentChange: number;
}) {
  const isPositive = percentChange >= 0;

  return (
    <div className="inline-flex relative w-max min-w-full items-center rounded group cursor-pointer hover:bg-primary/10 h-[60px] text-sm gap-2 transition-colors pl-2">
      <div className="flex items-center shrink-0 justify-start overflow-visible w-[100px] grow">
        <div className="flex items-center gap-3 w-auto max-w-full">
          <img
            className="h-10 w-10 rounded-sm object-cover"
            src={image}
            alt={title}
          />
          <span className="font-medium truncate">{title}</span>
        </div>
      </div>

      <div className="flex items-center shrink-0 grow-0 overflow-hidden w-[125px] justify-end whitespace-nowrap">
        <div className="flex flex-col min-w-0 items-end font-mono text-xs gap-1">
          <span className="max-w-full truncate inline-flex items-center gap-1">
            {ethValue.toFixed(2)}
            <span className="text-text-secondary">ETH</span>
          </span>
          <span
            className={cn(
              "inline-flex transition-colors",
              isPositive ? "text-green-400" : "text-red-400"
            )}
          >
            {isPositive ? "+" : ""}
            {percentChange.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}
