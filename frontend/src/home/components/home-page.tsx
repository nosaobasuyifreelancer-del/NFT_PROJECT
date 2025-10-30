import { Button } from "@/shared/components/ui/button";
import HomeContent1 from "./home-content-1";
import StatsCard from "./stats-card";
import { ChevronsRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { CustomTooltip } from "@/shared/components/ui/tooltip";

const collectionItems = [
  {
    title: "DX Terminal",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
  },
  {
    title: "CCN",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
  },
  {
    title: "FFF",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
  },
  {
    title: "YYY",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
  },
];

export default function HomePage() {
  const [showStats, setShowStats] = useState(false);
  return (
    <div
      className={cn(
        "w-full lg:flex-row flex flex-col gap-5",
        showStats ? "" : ""
      )}
    >
      <div
        className={cn(
          "flex flex-1 flex-col ",
          showStats ? "lg:max-w-[70%] max-w-full " : "max-w-full"
        )}
        id="main"
      >
        <div className="flex justify-between relative z-10 lg:h-17 w-full items-center gap-4 overflow-x-auto overflow-y-hidden scrollbar-hidden">
          <Button>All</Button>
          <div>
            <CustomTooltip
              trigger={
                <Button
                  onClick={() => setShowStats(true)}
                  aria-label="Open Stats"
                  hidden={!!showStats}
                >
                  <TrendingUp />
                </Button>
              }
              content="Stats"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 pb-6 flex-1 ">
          <HomeContent1 />
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-out-quint overflow-hidden sticky z-1 flex  ${
          showStats ? " translate-x-0 max-w-full " : "hidden"
        }`}
        id="stats"
      >
        <div className="flex flex-col scrollbar-hidden overflow-auto ">
          <div className="flex justify-between h-17 shrink-0 items-center gap-2 px-2">
            <Button>NFTs</Button>
            <CustomTooltip
              trigger={
                <Button
                  onClick={() => setShowStats(false)}
                  aria-label="Close Stats"
                  hidden={!showStats}
                >
                  <ChevronsRight />
                </Button>
              }
              content="Collapse Stats"
            />
          </div>
          <div className="h-full overflow-y-hidden">
            <div className="flex flex-col w-full min-w-0 h-full overflow-y-hidden">
              <div className="pb-2 inline-flex min-w-full overflow-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden h-6 min-h-6 gap-2 bg-transparent">
                <span className="flex items-center shrink-0 overflow-hidden first:pl-2 last:pr-2 justify-start text-text-secondary font-mono uppercase text-xs w-[100px] grow">
                  COLLECTION
                </span>
                <span className="flex items-center shrink-0 grow-0 overflow-hidden first:pl-2 last:pr-2 text-text-secondary font-mono uppercase text-xs w-[125px] justify-end whitespace-nowrap">
                  FLOOR
                </span>
              </div>
              <div className="w-full flex-1 overflow-x-auto scrollbar-hidden">
                {collectionItems.map((item) => (
                  <StatsCard
                    key={item.title}
                    image={item.image}
                    title={item.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
