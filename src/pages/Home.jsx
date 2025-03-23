import React, { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CarouselComponent = lazy(() =>
  import("@/components/custom/CarouselComponent")
);

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
        className="mt-8 font-mono cursor-pointer hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-400 hover:scale-105 transition duration-300 ease-in-out"
        onClick={() => navigate("/create-tour")}
      >
        Get Started, It's Free
      </Button>

      <Suspense
        fallback={
          <div className="text-center text-4xl mt-10 text-neutral-800 font-playfair-display">
            Loading...
          </div>
        }
      >
        <CarouselComponent />
      </Suspense>
    </section>
  );
};

export default Home;
