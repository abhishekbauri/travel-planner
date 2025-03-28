import React, { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const CarouselComponent = lazy(() =>
  import("@/components/custom/CarouselComponent")
);

const containerVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.7 },
  visible: {
    opacity: 1,
    y: 0,
    scale: [0.9, 1.1, 1],
    rotate: [5, -5, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="text-center py-10 md:py-20 px-6 md:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-rose-600 leading-tight font-playfair-display tracking-wide md:tracking-wider"
        variants={containerVariants}
      >
        Ready for Your Next Adventure?
      </motion.h1>
      <motion.h2
        className="text-xl md:text-3xl text-neutral-900 font-bold md:tracking-wider font-inter mt-6 md:mt-8"
        variants={containerVariants}
      >
        Ignite Your Wanderlust with AI-Crafted Journeys
      </motion.h2>
      <motion.h3
        className="text-xl text-slate-600 font-bold mt-6 font-nunito"
        variants={containerVariants}
      >
        Get Your Personalized Itineraries at your Fingertips!
      </motion.h3>
      <motion.p
        className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-lato"
        variants={containerVariants}
      >
        Our AI-powered travel planner helps you create customized itineraries,
        discover new destinations, and make the most of your journey
        effortlessly.
      </motion.p>
      <motion.div variants={containerVariants}>
        <Button
          variant="rose"
          className="mt-8 font-mono cursor-pointer hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-400 hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => navigate("/create-tour")}
        >
          Get Started, It's Free
        </Button>
      </motion.div>

      <Suspense
        fallback={
          <div className="text-center text-4xl mt-10 text-neutral-800 font-playfair-display">
            Loading...
          </div>
        }
      >
        <CarouselComponent />
      </Suspense>
    </motion.section>
  );
};

export default Home;
