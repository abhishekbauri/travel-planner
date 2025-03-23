import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { imageSrcForCarousel } from "@/constants";

const CarouselComponent = () => {
  return (
    <div className="mt-10 overflow-hidden">
      <Carousel className="w-60 md:w-100 mx-auto">
        <CarouselContent>
          {imageSrcForCarousel.map((element, index) => (
            <CarouselItem key={element.alt}>
              <img
                src={element.src}
                alt={element.alt}
                className="w-full h-40 md:h-60 object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
