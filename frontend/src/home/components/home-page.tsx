import { Button } from "@/shared/components/ui/button";
import { TrendingUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { CustomTooltip } from "@/shared/components/ui/tooltip";
import StatsPanel from "./blocks/stats-panel";
import CollectionCarousel from "./blocks/collection-carousel";
import { carouselSections, collectionItems } from "@/shared/lib/data";
import CarouselSection from "./blocks/carousel-section";

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
          "flex flex-1 flex-col overflow-hidden gap-5 min-h-0 min-w-0",
          showStats ? "lg:max-w-[70%] max-w-full " : "max-w-full"
        )}
        id="main"
      >
        <div className="flex justify-between relative w-full items-center gap-4  scrollbar-hide min-h-0 h-17 shrink-0">
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
        <div className="flex min-h-0 flex-col overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="flex gap-6 pb-6 min-h-0 shrink-0">
            <CollectionCarousel />
          </div>
          <StatsPanel collectionItems={collectionItems} isMobile />
          <div className="flex flex-col gap-6">
            {carouselSections.map((section, index) => (
              <CarouselSection
                key={index}
                title={section.title}
                subtitle={section.subtitle}
                items={section.items}
              />
            ))}
          </div>
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
