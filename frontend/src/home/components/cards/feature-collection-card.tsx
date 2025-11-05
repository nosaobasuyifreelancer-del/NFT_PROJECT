import { Card, CardContent } from "@/shared/components/ui/card";
import { CustomTooltip } from "@/shared/components/ui/tooltip";
import type { TrendingCollectionsCardProps } from "./trending-nfts-card";
import { Link } from "react-router";
import { cn } from "@/shared/lib/utils";

export default function FeatureCollectionCard({
  nft,
}: TrendingCollectionsCardProps) {
  const isPositive = nft.percentage ? nft.percentage >= 0 : undefined;

  return (
    <Link to={`/collection/nft_details/${nft.id}`} state={nft}>
      <Card className="p-0 min-h-0 min-w-0 rounded-lg border border-border-1 bg-bg-primary-transparent text-text-primary duration-200 ease-out-quint perspective-[0] translate-z-0 backface-hidden hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[1.005] shadow-xs hover:shadow-xs">
        <CardContent
          className="relative flex items-end max-h-[200px] md:h-[200px] h-[188px] rounded-sm min-w-0 min-h-0 p-0"
          style={{
            backgroundImage: `url(${nft.imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-bg-app" />
          <div className="flex flex-col justify-end h-full z-500 min-w-0 flex-1 p-2">
            <CustomTooltip
              align="start"
              trigger={
                <span className="leading-normal font-medium text-text-primary text-sm cursor-pointer truncate">
                  {nft.title}
                </span>
              }
              content={nft.title}
            />

            <div className="flex items-center">
              <span className="leading-normal text-sm text-text-secondary">
                Floor Price:&nbsp;
              </span>
              <span className="leading-tight font-mono uppercase text-sm font-medium text-text-secondary">
                <div className="items-center inline-flex gap-1 truncate cursor-pointer">
                  <div className="max-w-full truncate break-all flex items-center gap-1">
                    <CustomTooltip
                      align="center"
                      trigger={
                        <span className="font-mono text-text-primary">
                          {nft.count}
                        </span>
                      }
                      content={String(nft.count)}
                    />

                    <span className="text-text-secondary font-mono">
                      {nft.currency}
                    </span>
                  </div>
                </div>
              </span>
              <span className="leading-normal text-sm pl-2">
                <CustomTooltip
                  align="center"
                  trigger={
                    <span
                      className={cn(
                        "font-mono text-success-1 cursor-pointer",
                        isPositive ? "text-green-400" : "text-red-400"
                      )}
                    >
                      {isPositive ? "+" : ""}
                      {nft.percentage?.toFixed(2)}%
                    </span>
                  }
                  content={"1 day price change"}
                />
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
