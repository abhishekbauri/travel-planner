import SignInWithGoogle from "@/components/custom/SignInWithGoogle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { chatSession } from "@/service/AiModal";
import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { budgetOptions, companionOptions } from "@/constants";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 1.5, ease: "easeInOut" },
  },
};

const CreateTour = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [tourData, setTourData] = useState({
    budget: null,
    travelCompanion: null,
    destination: "",
    tripDays: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionClick = (name, value) => {
    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const ValidateTourData = () => {
    if (!tourData?.destination) {
      toast("Please enter your destination");
      return false;
    }
    if (/^\d+$/.test(tourData?.destination)) {
      toast("Destination should not contain only numbers");
      return false;
    }
    if (tourData?.destination.length < 3) {
      toast("Destination should be at least 3 characters long");
      return false;
    }
    if (tourData?.tripDays < 1 || tourData?.tripDays > 5) {
      toast("Trip Days should be between 1 and 5");
      return false;
    }
    if (!tourData?.budget) {
      toast("Please select budget");
      return false;
    }
    if (!tourData?.travelCompanion) {
      toast("Please select travel companion");
      return false;
    }
    return true;
  };

  const GenerateTourHandler = async () => {
    if (!ValidateTourData()) return;

    const prompt = `Generate a ${tourData?.tripDays}-day travel plan for ${tourData?.travelCompanion} in ${tourData?.destination} with a ${tourData?.budget} budget, including budget-friendly hotel options (name, address, price, image, coordinates, rating, and description) and a detailed daily itinerary (place name, details, image, coordinates, ticket pricing, travel time, and best visiting time) in JSON format.`;

    try {
      setLoading(true);
      const result = await chatSession.sendMessage(prompt);
      const tripDetails = JSON.parse(result?.response?.text());
      setLoading(false);
      toast("Trip Generated Successfully");
      navigate(`/view-trip-details/${user.uid}`, { state: { tripDetails } });
    } catch (error) {
      toast("Failed to generate trip");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 font-nunito">
      <h2 className="text-4xl font-bold text-gray-900 ">
        Tell us about your travel preferences{" "}
        <span className="ml-3">🏕️🏖️🏜️🏝️</span>
      </h2>
      <p className="text-gray-600 mt-3">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-10 md:mt20 space-y-4">
        <label className="block text-gray-700 font-bold text-xl">
          What is your destination of choice?
        </label>
        <input
          name="destination"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none"
          placeholder="Enter your destination Place, City, State and Country"
          value={tourData.destination}
          onChange={handleInputChange}
        />

        <label className="block text-gray-700 font-bold text-xl">
          How many days are you planning your trip?
        </label>
        <input
          name="tripDays"
          type="number"
          placeholder="Min 1 and Max 5 days"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none"
          value={tourData.tripDays}
          onChange={handleInputChange}
        />

        <h1 className="block text-gray-700 font-bold text-xl mt-10">
          What is Your Budget?
        </h1>
        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {budgetOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => handleOptionClick("budget", option.label)}
              className={`py-4 px-8  shadow-md rounded-lg flex flex-col items-start hover:scale-105 hover:bg-gray-200 hover:-translate-y-3 transition duration-300 ease-in-out ${
                tourData.budget === option.label
                  ? " bg-gray-200 shadow-lg shadow-neutral-400"
                  : ""
              }`}
            >
              <div className="flex gap-2 items-center space-y-2">
                <span className="text-3xl">{option.icon}</span>
                <p className="font-bold text-xl">{option.label}</p>
              </div>
              <p className="text-gray-500 text-start">{option.desc}</p>
            </button>
          ))}
        </motion.div>

        <h2 className="block text-gray-700 font-bold text-xl mt-10">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {companionOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => handleOptionClick("travelCompanion", option.label)}
              className={`py-4 px-8  shadow-md rounded-lg flex flex-col items-start hover:scale-105 hover:bg-gray-200 hover:-translate-y-3 transition duration-300 ease-in-out ${
                tourData.travelCompanion === option.label
                  ? "bg-gray-200 shadow-lg shadow-neutral-400"
                  : ""
              }`}
            >
              <div className="flex gap-2 items-center space-y-2">
                <span className="text-3xl">{option.icon}</span>
                <p className="font-bold text-xl">{option.label}</p>
              </div>
              <p className="text-gray-500 text-start">{option.desc}</p>
            </button>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 flex justify-end items-center">
        {user ? (
          loading ? (
            <div className="flex items-center gap-x-2  bg-black text-white py-2 px-4 rounded-lg">
              <LoaderCircle className="animate-spin" color="#fff" />
              Please wait while we generate your trip....
            </div>
          ) : (
            <Button
              variant="darkButton"
              className="font-mono hover:cursor-pointer hover:-translate-y-2 transition duration-300 ease-in-out"
              onClick={GenerateTourHandler}
            >
              Generate Trip
            </Button>
          )
        ) : (
          <SignInWithGoogle />
        )}
      </div>
    </div>
  );
};

export default CreateTour;
