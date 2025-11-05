import { Button } from "@/shared/components/ui/button";
import { TrendingUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { CustomTooltip } from "@/shared/components/ui/tooltip";
import StatsPanel from "./blocks/stats-panel";
import CollectionCarousel from "./blocks/collection-carousel";
import {
  collectionItems,
  editorsPicks,
  newArrivals,
  trendingCollections,
} from "@/shared/lib/data";
import CarouselSection from "./blocks/carousel-section";
import FAQSection from "./blocks/faq-section";
import HighestWeeklySales from "./blocks/highest-weekly-sales";

export default function HomePage() {
  const [showStats, setShowStats] = useState(false);

  function onStatsPanelOpenChange() {
    setShowStats((prev) => !prev);
  }

  return (
    <div
      className={cn(
        "w-full lg:flex-row flex-col flex min-h-0 overflow-hidden min-w-0 scrollbar-hide justify-between pb-6 px-4 lg:px-0",
        showStats ? "gap-0" : ""
      )}
    >
      <div
        className={cn(
          "flex flex-1 flex-col min-h-0 min-w-0 overflow-y-auto scrollbar-hide shrink-0",
          showStats ? "lg:max-w-full max-w-full " : "max-w-full"
        )}
        id="main"
      >
        <div className="flex min-h-0 min-w-0 flex-col scrollbar-hide shrink-o overflow-y-auto overflow-x-hidden gap-1">
          <div className="flex justify-between relative w-full items-center gap-4 scrollbar-hide min-h-0 h-17 shrink-0 lg:px-6">
            <CustomTooltip trigger={<Button>All</Button>} content="All" />

            <div>
              <CustomTooltip
                open={showStats ? false : undefined}
                trigger={
                  <Button
                    onClick={() => setShowStats(true)}
                    aria-label="Open Stats"
                    className={cn(
                      "lg:flex hidden [&_svg:not([class*='size-'])]:size-5  duration-250 delay-300 ease-linear",
                      !showStats
                        ? "opacity-100 transition-opacity"
                        : "opacity-0 transition-none pointer-events-none"
                    )}
                  >
                    <TrendingUp />
                  </Button>
                }
                content="Stats"
              />
            </div>
          </div>
          <div className="flex flex-col lg:gap-1 gap-16">
            <div className="flex flex-col gap-6 min-h-0 shrink-0 lg:px-6 lg:pr-3">
              <CollectionCarousel showStats={showStats} />
            </div>

            <StatsPanel
              statsPanelOpen={showStats}
              onStatsPanelOpenChange={onStatsPanelOpenChange}
              collectionItems={collectionItems}
              isMobile
            />

            <CarouselSection
              title={trendingCollections.title}
              subtitle={trendingCollections.subtitle}
              items={trendingCollections.items}
              variant="trending"
              statsPanelOpen={showStats}
            />

            <CarouselSection
              title={editorsPicks.title}
              subtitle={editorsPicks.subtitle}
              items={editorsPicks.items}
              statsPanelOpen={showStats}
            />
            <HighestWeeklySales />
            <CarouselSection
              title={newArrivals.title}
              subtitle={newArrivals.subtitle}
              items={newArrivals.items}
              statsPanelOpen={showStats}
            />

            <FAQSection />
          </div>
        </div>
      </div>
      <StatsPanel
        collectionItems={collectionItems}
        statsPanelOpen={showStats}
        onStatsPanelOpenChange={onStatsPanelOpenChange}
      />
    </div>
  );
}
