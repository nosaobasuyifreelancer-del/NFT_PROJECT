import { Button } from "@/shared/components/ui/button";
import HomeContent1 from "./home-content-1";
import StatsCard from "./stats-card";
import { ChevronsRight, LayoutPanelLeft, TrendingUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { CustomTooltip } from "@/shared/components/ui/tooltip";

const collectionItems = [
  {
    title: "DX Terminal",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 2.45,
    percentChange: +4.32,
  },
  {
    title: "CCN",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 1.12,
    percentChange: -1.27,
  },
  {
    title: "FFF",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 0.87,
    percentChange: +0.64,
  },
  {
    title: "YYY",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 3.01,
    percentChange: +6.75,
  },
  {
    title: "ZETA",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 0.33,
    percentChange: -2.14,
  },
  {
    title: "NEON DAO",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 1.77,
    percentChange: +0.91,
  },
  {
    title: "KRAKEN",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 0.45,
    percentChange: -3.42,
  },
  {
    title: "VANTA",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 2.14,
    percentChange: +1.18,
  },
  {
    title: "OMEGA",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 1.05,
    percentChange: -0.45,
  },
  {
    title: "PIXEL LABS",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 0.69,
    percentChange: +3.02,
  },
  {
    title: "MATRIX",
    image:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    ethValue: 2.98,
    percentChange: -4.83,
  },
];

export default function HomePage() {
  const [showStats, setShowStats] = useState(false);
  return (
    <div
      className={cn(
        "w-full lg:flex-row flex flex-col gap-5 min-h-0 overflow-hidden"
      )}
    >
      <div
        className={cn(
          "flex flex-1 flex-col overflow-y-auto gap-5 min-h-0",
          showStats ? "lg:max-w-[70%] max-w-full " : "max-w-full"
        )}
        id="main"
      >
        <div className="flex justify-between relative w-full items-center gap-4  scrollbar-hidden min-h-0 h-17 shrink-0">
          <Button>All</Button>
          <div>
            <CustomTooltip
              trigger={
                <Button
                  onClick={() => setShowStats(true)}
                  aria-label="Open Stats"
                  hidden={!!showStats}
                  className="hidden lg:flex"
                >
                  <TrendingUp />
                </Button>
              }
              content="Stats"
            />
          </div>
        </div>
        <div className="flex gap-6 pb-6 min-h-0 shrink-0">
          <HomeContent1 />
        </div>
        <div
          className={`transition-all duration-500 ease-out-quint overflow-hidden z-1 flex min-h-0  lg:hidden`}
          id="stats"
        >
          <div className="flex flex-col scrollbar-hidden overflow-auto min-h-0">
            <div className="flex justify-between h-17 shrink-0 items-center gap-2 px-2">
              <Button>
                <LayoutPanelLeft className="text-white w-4 h-4" />
                NFTs
              </Button>
              <CustomTooltip
                trigger={
                  <Button
                    onClick={() => setShowStats(false)}
                    aria-label="Close Stats"
                    // hidden={!showStats}
                  >
                    <ChevronsRight className="hidden lg:flex" />
                    <span className="flex lg:hidden">View all</span>
                  </Button>
                }
                content="Collapse Stats"
              />
            </div>
            <div className="h-full overflow-y-hidden min-h-0">
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
                      title={item.title}
                      image={item.image}
                      ethValue={item.ethValue}
                      percentChange={item.percentChange}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-out-quint overflow-hidden z-1 flex min-h-0  ${
          showStats
            ? " translate-x-0 lg:max-w-[365px] max-w-full lg:max-h-full max-h-[365px]"
            : "hidden lg:max-w-0"
        }`}
        id="stats"
      >
        <div className="flex flex-col scrollbar-hidden overflow-auto min-h-0">
          <div className="flex justify-between h-17 shrink-0 items-center gap-2 px-2">
            <CustomTooltip
              trigger={
                <Button>
                  <LayoutPanelLeft className="text-white " />
                  NFTs
                </Button>
              }
              content="Top NFTs"
            />

            <CustomTooltip
              trigger={
                <Button
                  onClick={() => setShowStats(false)}
                  aria-label="Close Stats"
                  hidden={!showStats}
                  className="hidden lg:flex"
                >
                  <ChevronsRight />
                </Button>
              }
              content="Collapse Stats"
            />
          </div>
          <div className="h-full overflow-y-hidden min-h-0">
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
                    title={item.title}
                    image={item.image}
                    ethValue={item.ethValue}
                    percentChange={item.percentChange}
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
