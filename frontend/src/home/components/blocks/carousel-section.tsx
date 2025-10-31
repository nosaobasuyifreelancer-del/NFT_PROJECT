import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/components/ui/carousel";
import { FeatureCollectionCard } from "../cards/feature-collection-card";

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
          <TweenCarousel key={groupIdx} group={group} />
        ))}
      </div>
    </div>
  );
}

function TweenCarousel({
  group,
}: {
  group: { imgUrl: string; title: string; subTitle: string }[];
}) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
  });

  return (
    <Carousel className="relative w-full">
      <CarouselContent ref={emblaRef}>
        {group.map((card, cardIdx) => (
          <CarouselItem
            key={cardIdx}
            className="md:basis-1/2 lg:basis-1/3 rounded-sm"
          >
            <FeatureCollectionCard
              imgUrl={card.imgUrl}
              title={card.title}
              subTitle={card.subTitle}
              maxTitleLength={20}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
