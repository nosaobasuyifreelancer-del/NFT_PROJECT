import { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { cn } from "@/shared/lib/utils";
import { Separator } from "@/shared/components/ui/separator";
import { collectionSlides } from "@/shared/lib/data";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import React from "react";

export default function CollectionCarousel() {
  const autoplayDelay = 5000;
  const autoplay = useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );
  const wheelGestures = WheelGesturesPlugin();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <div className="relative w-full group cursor-pointer rounded-sm min-h-0 overflow-hidden">
      <Carousel
        className="relative w-full rounded-sm"
        plugins={[autoplay.current, wheelGestures]}
        opts={{ loop: true, dragFree: true }}
        setApi={setApi}
      >
        <CarouselContent className="rounded-sm">
          {collectionSlides.map((slide) => (
            <CarouselItem key={slide.id} className="rounded-md ">
              <div className="p-1 rounded-sm">
                <Card className="overflow-hidden border-0 min-h-0">
                  <CardContent
                    className="relative flex aspect-video items-end p-6 min-h-0 lg:h-[400px] md:h-[450px] h-[430px] overflow-x-hidden rounded-sm"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-bg-app " />
                    <div className="flex flex-col w-full grow p-3 md:p-5 z-500">
                      <span className="leading-normal font-medium truncate text-text-primary md:text-3xl text-lg">
                        {slide.username}
                      </span>
                      <span className="leading-normal text-sm truncate">
                        {slide.subUserName}
                      </span>
                      <div className="flex p-3 glass rounded-md gap-2 min-w-0 max-w-fit flex-wrap sm:flex-nowrap overflow-hidden [&>*:nth-child(n+7)]:hidden sm:[&>*:nth-child(n+7)]:flex">
                        {slide.slidesInfo.map((info, i) => (
                          <React.Fragment key={i}>
                            <div className="flex flex-col gap-2 justify-between min-w-0">
                              <span className="leading-tight font-mono uppercase text-xs opacity-60 self-start md:self-auto truncate text-ellipsis">
                                {info.label}
                              </span>
                              <span className="leading-tight font-mono uppercase font-medium inline-flex items-center group-data-[size=md]/stat-display:md:text-md self-start text-xs md:self-auto md:text-sm truncate">
                                {info.value}
                              </span>
                            </div>
                            {i !== slide.slidesInfo.length - 1 && (
                              <Separator
                                orientation="vertical"
                                className="shrink-0 bg-white opacity-10 data-[orientation=vertical]:w-px data-[orientation=vertical]:h-auto "
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center cursor-pointer absolute inset-y-0 mx-4 left-0 w-8">
          <CarouselPrevious className="z-50 opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
        </div>
        <div className="flex items-center cursor-pointer absolute inset-y-0 mx-4 right-0 w-8">
          <CarouselNext className="z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Carousel>

      <div className="mt-3 h-1.5 ">
        <div className="flex h-3 items-center justify-center gap-2.5">
          {collectionSlides.map((_, index) => (
            <div
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "relative h-1.5 bg-white/30 cursor-pointer overflow-hidden rounded-full",
                "w-full lg:w-10",
                selectedIndex === index
                  ? "bg-white "
                  : "bg-white/40 hover:bg-white/70"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
