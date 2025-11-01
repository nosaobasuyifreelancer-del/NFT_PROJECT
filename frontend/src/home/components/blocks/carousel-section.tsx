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
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselSectionProps {
  title: string;
  subtitle: string;
  items: {
    imgUrl: string;
    title: string;
    subTitle: string;
  }[][];
}

export default function CarouselSection({
  title,
  subtitle,
  items,
}: CarouselSectionProps) {
  const isTrending = /trending/i.test(title); // detect “Trending”

  return (
    <div className="flex flex-col gap-4 p-6 min-h-0 min-w-0">
      <div className="flex flex-col lg:gap-1">
        <span className="font-medium leading-tight text-xl">{title}</span>
        <span className="leading-normal text-sm text-text-secondary">
          {subtitle}
        </span>
      </div>

      <div className="flex flex-col gap-10">
        {items.map((group, groupIdx) => (
          <TweenCarousel key={groupIdx} group={group} isTrending={isTrending} />
        ))}
      </div>
    </div>
  );
}

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);

function TweenCarousel({
  group,
  isTrending,
}: {
  group: { imgUrl: string; title: string; subTitle: string }[];
  isTrending: boolean;
}) {
  const wheelGestures = WheelGesturesPlugin();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "center", dragFree: false },
    [wheelGestures]
  );

  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (api: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = api.internalEngine();
      const scrollProgress = api.scrollProgress();
      const slidesInView = api.slidesInView();
      const isScrollEvent = eventName === "scroll";

      api.scrollSnapList().forEach((snap: number, snapIdx: number) => {
        let diffToTarget = snap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIdx];

        slidesInSnap.forEach((slideIdx: number) => {
          if (isScrollEvent && !slidesInView.includes(slideIdx)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem: any) => {
              const target = loopItem.target();
              if (slideIdx === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1) diffToTarget = snap - (1 + scrollProgress);
                if (sign === 1) diffToTarget = snap + (1 - scrollProgress);
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0.3, 1).toString();
          api.slideNodes()[slideIdx].style.opacity = opacity;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);

    return () => {
      emblaApi
        .off("reInit", setTweenFactor)
        .off("reInit", tweenOpacity)
        .off("scroll", tweenOpacity)
        .off("slideFocus", tweenOpacity);
    };
  }, [emblaApi, tweenOpacity, setTweenFactor]);

  const combinedGroups = isTrending
    ? group.reduce(
        (
          acc: { imgUrl: string; title: string; subTitle: string }[][],
          curr,
          idx
        ) => {
          if (idx % 2 === 0) {
            acc.push([curr]);
          } else {
            acc[acc.length - 1].push(curr);
          }
          return acc;
        },
        []
      )
    : group.map((item) => [item]);

  return (
    <Carousel
      className="relative w-full group"
      plugins={[wheelGestures]}
      opts={{ loop: true, align: "start", dragFree: false }}
    >
      <CarouselContent ref={emblaRef}>
        {combinedGroups.map((pair, pairIdx) => (
          <CarouselItem
            key={pairIdx}
            className={`transition-opacity duration-300 ${
              isTrending
                ? "md:basis-1/3 lg:basis-1/4"
                : "md:basis-1/3 lg:basis-1/3"
            }`}
          >
            {isTrending ? (
              <div className="flex flex-col gap-3">
                {pair.map((card, idx) => (
                  <TrendingCollectionsCard
                    key={idx}
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
