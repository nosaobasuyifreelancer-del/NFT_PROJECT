export default function StatsCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="inline-flex relative w-max min-w-full items-center rounded group cursor-pointer hover:bg-primary h-[60px] text-sm gap-2">
      <div className="flex items-center shrink-0 first:pl-2 last:pr-2 justify-start overflow-visible w-[100px] grow">
        <div className="border-border-2 border-0 p-0 flex items-center gap-3 w-auto max-w-full">
          <img
            className="relative inline-block shrink-0 h-10 w-10 rounded-sm"
            src={image}
          />
          <span className="flex flex-col justify-center order-2 min-w-0 overflow-hidden flex-auto items-start self-stretch">
            {title}
          </span>
        </div>
      </div>
      <div className="flex items-center shrink-0 grow-0 overflow-hidden first:pl-2 last:pr-2 w-[125px] justify-end whitespace-nowrap">
        <div className="flex flex-col min-w-0 items-end font-mono text-xs gap-2">
          <span className="max-w-full truncate break-all inline-flex animate-positive-change-bg gap-2">
            {"<0.01"}
            <span className="text-text-secondary font-mono">ETH</span>
          </span>
          <span className="inline-flex animate-change-animation-bg animate-negative-change-bg text-success-1">
            +0.06%
          </span>
        </div>
      </div>
    </div>
  );
}
