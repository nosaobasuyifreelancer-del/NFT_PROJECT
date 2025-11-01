"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { FeatureCollectionCard } from "../cards/feature-collection-card";
import TrendingCollectionsCard from "../cards/trending-collections-card";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselSectionProps {
  title: string;
  subtitle: string;
  items: {
    imgUrl: string;
    title: string;
    subTitle: string;
  }[];
  variant?: "trending" | "default";
}

export default function CarouselSection({
  title,
  subtitle,
  items,
  variant = "default",
}: CarouselSectionProps) {
  return (
    <div className="flex flex-col gap-4 lg:p-6 p-2 min-h-0 min-w-0 shrink-0">
      {/* Header */}
      <div className="flex flex-col lg:gap-1">
        <span className="font-medium leading-tight text-xl">{title}</span>
        <span className="leading-normal text-sm text-text-secondary">
          {subtitle}
        </span>
      </div>

      {/* Carousel */}
      <TweenCarousel items={items} variant={variant} />
    </div>
  );
}

function TweenCarousel({
  items,
  variant,
}: {
  items: { imgUrl: string; title: string; subTitle: string }[];
  variant: "trending" | "default";
}) {
  const wheelGestures = WheelGesturesPlugin();
  const [emblaRef] = useEmblaCarousel(
    { loop: false, align: "center", dragFree: false },
    [wheelGestures]
  );

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
      className="relative w-full group"
      plugins={[wheelGestures]}
      opts={{ loop: true, align: "start", dragFree: false }}
    >
      <CarouselContent ref={emblaRef}>
        {groupedItems.map((pair, idx) => (
          <CarouselItem
            key={idx}
            className={`transition-opacity duration-300 ${
              variant === "trending"
                ? "md:basis-1/3 lg:basis-1/4"
                : "md:basis-1/3 lg:basis-1/4"
            }`}
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

      <CarouselPrevious className="z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CarouselNext className="z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Carousel>
  );
}
