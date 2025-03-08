import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

const imageSrc = [
  {
    src: "/photo1.jpg",
    alt: "Photo 1",
  },
  {
    src: "/photo2.jpg",
    alt: "Photo 2",
  },
  {
    src: "/photo3.jpg",
    alt: "Photo 3",
  },
  {
    src: "/photo4.jpg",
    alt: "Photo 4",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center py-10 md:py-20 px-6 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-rose-600 leading-tight font-playfair-display tracking-wide md:tracking-wider">
        Ready for Your Next Adventure?
      </h1>
      <h2 className="text-xl md:text-3xl text-neutral-900 font-bold md:tracking-wider font-inter mt-6 md:mt-8">
        Ignite Your Wanderlust with AI-Crafted Journeys
      </h2>
      <h3 className="text-xl text-slate-600 font-bold mt-6 font-nunito">
        Get Your Personalized Itineraries at your Fingertips!
      </h3>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-lato">
        Our AI-powered travel planner helps you create customized itineraries,
        discover new destinations, and make the most of your journey
        effortlessly.
      </p>
      <Button
        variant="rose"
        className="mt-8 font-mono cursor-pointer"
        onClick={() => navigate("/create-tour")}
      >
        Get Started, It's Free
      </Button>

      <div className="mt-10 overflow-hidden">
        <Carousel className="w-60 md:w-100 mx-auto">
          <CarouselContent>
            {imageSrc.map((element, index) => (
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
    </section>
  );
};

export default Home;
