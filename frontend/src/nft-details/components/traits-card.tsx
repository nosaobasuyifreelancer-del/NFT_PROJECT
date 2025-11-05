interface TraitsCardProps {
  header: string;
  variant: string;
  count?: string | number;
  percentage?: string | number;
  price?: string | number;
  currency?: string;
  bgVariant?: "default" | "alt";
}

export default function TraitsCard({
  header,
  variant,
  count,
  percentage,
  price,
  currency,
  bgVariant,
}: TraitsCardProps) {
  const isAlt = bgVariant === "alt";
  const backgroundColor = isAlt ? "#14405B" : "#301245";
  const percentageColor = isAlt ? "#3191E1" : "#9E4EE8";
  return (
    <div className="flex flex-col h-25 w-full rounded-sm border border-border-1 p-3 gap-1.5 shadow-2xl">
      <span className="uppercase text-text-secondary text-sm">{header}</span>
      <span className="text-white text-sm">{variant}</span>
      <div className="flex justify-between gap-2 text-xs items-center">
        <span
          className="flex gap-2 rounded-sm py-1 px-1.5 text-text-primary"
          style={{ backgroundColor }}
        >
          {count}
          <span style={{ color: percentageColor }}>{percentage}</span>
        </span>
        <span className="text-text-primary font-mono">
          {price}
          <span className="text-text-secondary">&nbsp;{currency}</span>
        </span>
      </div>
    </div>
  );
}
