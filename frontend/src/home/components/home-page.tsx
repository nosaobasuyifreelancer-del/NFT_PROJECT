import { Button } from "@/shared/components/ui/button";
import { TrendingUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { CustomTooltip } from "@/shared/components/ui/tooltip";
import StatsPanel from "./stats-panel";
import CollectionCarousel from "./collection-carousel";
import { collectionItems } from "@/shared/lib/data";

export default function HomePage() {
  const [showStats, setShowStats] = useState(false);
  return (
    <div
      className={cn(
        "w-full lg:flex-row flex flex-col min-h-0 overflow-hidden min-w-0",
        showStats ? "gap-5" : ""
      )}
    >
      <div
        className={cn(
          "flex flex-1 flex-col overflow-y-auto gap-5 min-h-0 min-w-0",
          showStats ? "lg:max-w-[70%] max-w-full " : "max-w-full"
        )}
        id="main"
      >
        <div className="flex justify-between relative w-full items-center gap-4  scrollbar-hidden min-h-0 h-17 shrink-0">
          <CustomTooltip trigger={<Button>All</Button>} content="All" />
          <div>
            <CustomTooltip
              trigger={
                <Button
                  onClick={() => setShowStats(true)}
                  aria-label="Open Stats"
                  hidden={!!showStats}
                  className="hidden lg:flex [&_svg:not([class*='size-'])]:size-5 "
                >
                  <TrendingUp />
                </Button>
              }
              content="Stats"
            />
          </div>
        </div>
        <div className="flex gap-6 pb-6 min-h-0 shrink-0">
          <CollectionCarousel />
        </div>
        <StatsPanel collectionItems={collectionItems} isMobile />
      </div>
      <StatsPanel
        collectionItems={collectionItems}
        showStats={showStats}
        onClose={() => setShowStats(false)}
      />
    </div>
  );
}
