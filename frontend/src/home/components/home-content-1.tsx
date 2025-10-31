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

const slides = [
  {
    id: 1,
    username: "Visions 1",
    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
    slidesInfo: [
      {
        label: "FLOOR PRICE",
        value: "0.133 ETH",
      },
      {
        label: "ITEMS",
        value: "9,567",
      },
      {
        label: "TOTAL VOLUME",
        value: "1.24K ETH",
      },
      {
        label: "lISTED",
        value: "3.5%",
      },
    ],
  },
  {
    id: 2,
    username: "Visions 2",
    subUserName: "goblin.wtf",

    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
    slidesInfo: [
      {
        label: "FLOOR PRICE",
        value: "0.133 ETH",
      },
      {
        label: "ITEMS",
        value: "9,567",
      },
      {
        label: "TOTAL VOLUME",
        value: "1.24K ETH",
      },
      {
        label: "lISTED",
        value: "3.5%",
      },
    ],
  },
  {
    id: 3,
    username: "Visions 3",
    subUserName: "goblin.wtf",

    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
    slidesInfo: [
      {
        label: "FLOOR PRICE",
        value: "0.133 ETH",
      },
      {
        label: "ITEMS",
        value: "9,567",
      },
      {
        label: "TOTAL VOLUME",
        value: "1.24K ETH",
      },
      {
        label: "lISTED",
        value: "3.5%",
      },
    ],
  },
  {
    id: 4,
    username: "Visions 4",
    subUserName: "goblin.wtf",
    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
    slidesInfo: [
      {
        label: "FLOOR PRICE",
        value: "0.133 ETH",
      },
      {
        label: "ITEMS",
        value: "9,567",
      },
      {
        label: "TOTAL VOLUME",
        value: "1.24K ETH",
      },
      {
        label: "lISTED",
        value: "3.5%",
      },
    ],
  },
  {
    id: 5,
    username: "Visions 5",
    subUserName: "goblin.wtf",
    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
    slidesInfo: [
      {
        label: "FLOOR PRICE",
        value: "0.133 ETH",
      },
      {
        label: "ITEMS",
        value: "9,567",
      },
      {
        label: "TOTAL VOLUME",
        value: "1.24K ETH",
      },
      {
        label: "lISTED",
        value: "3.5%",
      },
    ],
  },
];

export default function HomeContent1() {
  const autoplayDelay = 5000;
  const autoplay = useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

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
    <div className="relative w-full group cursor-pointer rounded-sm min-h-0">
      <Carousel
        className="relative w-full rounded-sm"
        plugins={[autoplay.current]}
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="rounded-sm">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="rounded-md ">
              <div className="p-1 rounded-sm">
                <Card className="overflow-hidden border-0 min-h-0">
                  <CardContent
                    className="relative flex aspect-video items-end p-6 min-h-0 max-h-[400px] overflow-x-hidden rounded-sm"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="flex flex-col w-full grow p-3 md:p-5 z-500">
                      <span className="leading-normal font-medium text-text-primary text-3xl md:text-heading-lg">
                        {slide.username}
                      </span>
                      <span className="leading-normal text-sm">
                        {slide.subUserName}
                      </span>
                      <div className="flex p-3 glass max-w-fit rounded-md gap-2">
                        {slide.slidesInfo.map((info, i) => (
                          <>
                            <div className="flex flex-col gap-2 justify-between">
                              <span className="leading-tight font-mono uppercase text-xs opacity-60 self-start md:self-auto">
                                {info.label}
                              </span>
                              <span className="leading-tight font-mono uppercase font-medium inline-flex items-center group-data-[size=md]/stat-display:md:text-md self-start text-xs md:self-auto md:text-sm">
                                {info.value}
                              </span>
                            </div>
                            {i !== slide.slidesInfo.length - 1 && (
                              <Separator
                                orientation="vertical"
                                className="shrink-0 bg-white opacity-10 data-[orientation=vertical]:w-px data-[orientation=vertical]:h-auto"
                              />
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="z-20 opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
        <CarouselNext className="z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Carousel>

      <div className="absolute -bottom-5 left-0 right-0 flex justify-center gap-2 z-20 w-full">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "relative h-1.5 bg-white/30 cursor-pointer overflow-hidden rounded-full",
              "w-full lg:w-12",
              selectedIndex === index
                ? "bg-white "
                : "bg-white/40 hover:bg-white/70"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
