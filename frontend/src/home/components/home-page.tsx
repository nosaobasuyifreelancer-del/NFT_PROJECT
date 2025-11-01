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
  return (
    <div
      className={cn(
        "w-full lg:flex-row flex-col flex min-h-0 overflow-hidden min-w-0 scrollbar-hide justify-between pb-6",
        showStats ? "gap-0" : ""
      )}
    >
      <div
        className={cn(
          "flex flex-1 flex-col  gap-5 min-h-0 min-w-0 overflow-y-auto scrollbar-hide shrink-0",
          showStats ? "lg:max-w-full max-w-full " : "max-w-full"
        )}
        id="main"
      >
        <div className="flex justify-between relative w-full items-center gap-4  scrollbar-hide min-h-0 h-17 shrink-0 ">
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
        <div className="flex min-h-0 min-w-0 flex-col scrollbar-hide shrink-o overflow-y-auto gap-5">
          <div className="flex flex-col gap-6 pb-6 min-h-0 shrink-0">
            <CollectionCarousel />
          </div>
          <StatsPanel collectionItems={collectionItems} isMobile />

          <CarouselSection
            title={trendingCollections.title}
            subtitle={trendingCollections.subtitle}
            items={trendingCollections.items}
            variant="trending"
          />

          <CarouselSection
            title={editorsPicks.title}
            subtitle={editorsPicks.subtitle}
            items={editorsPicks.items}
          />
          <HighestWeeklySales />
          <CarouselSection
            title={newArrivals.title}
            subtitle={newArrivals.subtitle}
            items={newArrivals.items}
          />

          <FAQSection />
        </div>
      </div>
      <StatsPanel
        collectionItems={collectionItems}
        showStats={showStats}
        onClose={() => setShowStats(false)}
      />
    </div>
  );
}

{
  /* <div
        className={cn(
          "flex flex-1 flex-col  gap-5 min-h-0 min-w-0 overflow-y-auto scrollbar-hide",
          showStats ? "lg:max-w-full max-w-full " : "max-w-full"
        )}
        id="main"
      >
        
        </div>
        <div className="flex min-h-0 min-w-0 flex-col scrollbar-hide overflow-x-hidden">
          <div
            className={cn(
              "flex flex-col gap-6 pb-6 min-h-0 shrink-0",
              showStats ? "" : ""
            )}
          >
            <CollectionCarousel />
            <StatsPanel collectionItems={collectionItems} isMobile />
            <CarouselSection
              title={trendingCollections.title}
              subtitle={trendingCollections.subtitle}
              items={trendingCollections.items}
              variant="trending"
            />

            <CarouselSection
              title={editorsPicks.title}
              subtitle={editorsPicks.subtitle}
              items={editorsPicks.items}
            />
            <HighestWeeklySales />
            <CarouselSection
              title={newArrivals.title}
              subtitle={newArrivals.subtitle}
              items={newArrivals.items}
            />

            <FAQSection />
          </div>
        </div>
      </div> */
}
