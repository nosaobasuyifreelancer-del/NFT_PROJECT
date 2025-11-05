export default function MoreInfoCard({
  imgUrl,
  amount,
  name,
  currency,
}: {
  imgUrl: string;
  amount: number;
  name: string;
  currency: string;
}) {
  return (
    <div className="duration-200 ease-out-circ perspective-[0] translate-z-0 backface-hidden hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[1.005] border border-border-1 flex h-full flex-col overflow-hidden rounded-sm ">
      <div
        className="flex overflow-hidden relative size-full  h-52"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex px-3 flex-col">
        <span className="h-12 items-center flex leading-normal text-sm font-medium">
          {name}
        </span>
        <div className="h-12 items-center flex pb-3.5 leading-normal text-sm">
          <span className="font-mono text-text-primary">{amount}</span>
          <span className="text-text-secondary font-mono">
            &nbsp;{currency}
          </span>
        </div>
      </div>
    </div>
  );
}
