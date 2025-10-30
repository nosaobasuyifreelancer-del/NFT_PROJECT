import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: "Visions",
    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
  },
  {
    id: 2,
    title: "Visions2",
    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
  },
  {
    id: 3,
    title: "Visions3",
    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
  },
  {
    id: 4,
    title: "Visions4",
    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
  },
  {
    id: 5,
    title: "Visions5",
    image:
      "https://i2.seadn.io/ethereum/f16eb347d152433c81afe6887fd93613/9f9ff0f77933af099d2893a35b6377/649f9ff0f77933af099d2893a35b6377.png?w=2000",
  },
];

export default function HomeContent1() {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="p-1">
              <Card className="overflow-hidden border-0">
                <CardContent
                  className="relative flex aspect-video items-center justify-center p-6 rounded-lg"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                  <span className="relative z-10 text-white text-3xl font-bold">
                    {slide.title}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* ✅ Move these here */}
      <CarouselPrevious className="z-20" />
      <CarouselNext className="z-20" />
    </Carousel>
  );
}
