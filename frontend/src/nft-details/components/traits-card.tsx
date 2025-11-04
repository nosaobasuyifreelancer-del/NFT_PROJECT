export default function TraitsCard({
  header,
  variant,
}: {
  header: string;
  variant: string;
}) {
  return (
    <div className="flex flex-col h-25 w-full rounded-sm border border-border-1 p-3 gap-1.5 shadow-2xl">
      <span className="uppercase text-text-secondary text-sm">{header}</span>
      <span className="text-white text-sm">{variant}</span>
      <div className="flex justify-between gap-2 text-xs items-center">
        <span className="flex gap-2 bg-[#AB2EFF] bg-opaci rounded-sm py-1 px-1.5 text-text-primary">
          1,389<span className="">16%</span>
        </span>
        <span className="text-text-primary font-mono">
          6.10<span className="text-text-secondary">&nbsp;ETH</span>
        </span>
      </div>
    </div>
  );
}
