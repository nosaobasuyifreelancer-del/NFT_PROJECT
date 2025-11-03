"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/shared/components/ui/carousel";
import { FeatureCollectionCard } from "../cards/feature-collection-card";
import TrendingCollectionsCard from "../cards/trending-collections-card";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/shared/lib/utils";
import { useEffect, useState } from "react";
import SectionTitle from "./section-title";
interface CarouselSectionProps {
  title: string;
  subtitle: string;
  items: {
    imgUrl: string;
    title: string;
    subTitle: string;
  }[];
  variant?: "trending" | "default";
  statsPanelOpen?: boolean;
}

export default function CarouselSection({
  title,
  subtitle,
  items,
  variant = "default",
  statsPanelOpen = false,
}: CarouselSectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 lg:p-6 min-h-0 max-w-full shrink-0 [mask-image:linear-gradient(to_right,transparent,black_theme(spacing.4),black_calc(100%_-_theme(spacing.4)),transparent)] lg:[mask-image:linear-gradient(to_right,transparent,black_theme(spacing.4),black_calc(100%_-_theme(spacing.6)),transparent)] [mask-size:calc(100%+theme(spacing.4))] lg:[mask-size:calc(100%+theme(spacing.6))] [mask-position:calc(theme(spacing.4)*-1)] lg:[mask-position:calc(theme(spacing.6)*-1)] transition-[mask-size,mask-position] duration-500 "
        // statsPanelOpen ? "lg:pr-6" : "lg:pr-0"
      )}
    >
      <SectionTitle title={title} subTitle={subtitle} />

      <TweenCarousel
        items={items}
        variant={variant}
        statsPanelOpen={statsPanelOpen}
      />
    </div>
  );
}

function TweenCarousel({
  items,
  variant,
  statsPanelOpen,
}: {
  items: { imgUrl: string; title: string; subTitle: string }[];
  variant: "trending" | "default";
  statsPanelOpen: boolean;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const wheelGestures = WheelGesturesPlugin();
  const [emblaRef] = useEmblaCarousel(
    { loop: false, align: "center", dragFree: false },
    [wheelGestures]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // If variant is "trending", group into pairs (2 per column)
  const groupedItems =
    variant === "trending"
      ? items.reduce(
          (
            acc: { imgUrl: string; title: string; subTitle: string }[][],
            curr,
            idx
          ) => {
            if (idx % 2 === 0) acc.push([curr]);
            else acc[acc.length - 1].push(curr);
            return acc;
          },
          []
        )
      : items.map((item) => [item]);

  return (
    <Carousel
      setApi={setApi}
      className="relative w-full group"
      plugins={[wheelGestures]}
      opts={{ loop: false, align: "start", dragFree: false }}
    >
      <CarouselContent ref={emblaRef}>
        {groupedItems.map((pair, idx) => (
          <CarouselItem
            key={idx}
            className={cn(
              "transition-opacity duration-300 basis-[80%] md:basis-[38%] lg:basis-[300px]",
              current < idx + (statsPanelOpen ? -1 : -2)
                ? "opacity-[0.25]"
                : "opacity-[100]"
            )}
          >
            {variant === "trending" ? (
              <div className="flex flex-col gap-3">
                {pair.map((card, i) => (
                  <TrendingCollectionsCard
                    key={i}
                    imgUrl={card.imgUrl}
                    title={card.title}
                    description={card.subTitle}
                  />
                ))}
              </div>
            ) : (
              <FeatureCollectionCard
                imgUrl={pair[0].imgUrl}
                title={pair[0].title}
                subTitle={pair[0].subTitle}
                maxTitleLength={20}
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
