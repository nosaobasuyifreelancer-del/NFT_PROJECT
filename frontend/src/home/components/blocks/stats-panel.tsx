import { Button } from "@/shared/components/ui/button";
import { CustomTooltip } from "@/shared/components/ui/tooltip";
import { ChevronsRight, LayoutPanelLeft } from "lucide-react";
import StatsCard from "../cards/stats-card";
import { cn } from "@/shared/lib/utils";

export default function StatsPanel({
  collectionItems,
  statsPanelOpen,
  onStatsPanelOpenChange,
  isMobile = false,
}: {
  collectionItems: {
    title: string;
    image: string;
    ethValue: number;
    percentChange: number;
  }[];
  statsPanelOpen: boolean;
  onStatsPanelOpenChange: VoidFunction;
  isMobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "transition-[flex-basis] duration-300 ease-out-quint overflow-hidden z-900  min-h-0 shrink-0",
        statsPanelOpen
          ? " translate-x-0 basis-[365px] h-full lg:pr-4"
          : "hidden lg:flex lg:basis-0",
        isMobile ? "flex lg:hidden max-h-[353px]" : "hidden lg:flex"
      )}
      id="stats"
    >
      <div className="flex flex-col scrollbar-hidden overflow-auto min-h-0">
        <div className="flex justify-between h-17 shrink-0 items-center gap-2 ">
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
                onClick={onStatsPanelOpenChange}
                aria-label="Close Stats"
                className={cn(
                  "flex [&_svg:not([class*='size-'])]:size-5",
                  !isMobile && !statsPanelOpen && "hidden"
                )}
              >
                {isMobile ? "View all" : <ChevronsRight />}
              </Button>
            }
            content={isMobile ? "View all" : "Collapse Stats"}
          />
        </div>
        <div className="h-full overflow-y-hidden min-h-0">
          <div className="flex flex-col w-full min-w-0 h-full overflow-y-hidden">
            <div className="pb-2 inline-flex min-w-full overflow-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden h-6 min-h-6 gap-2 bg-transparent">
              <span className="flex items-center shrink-0 overflow-hidden justify-start text-text-secondary font-mono uppercase text-xs w-[100px] grow">
                COLLECTION
              </span>
              <span className="flex items-center shrink-0 grow-0 overflow-hidden  text-text-secondary font-mono uppercase text-xs w-[125px] justify-end whitespace-nowrap">
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
  );
}
