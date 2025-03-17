import SignInWithGoogle from "@/components/custom/SignInWithGoogle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { chatSession } from "@/service/AiModal";
import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const budgetOptions = [
  {
    label: "Cheap",
    desc: "Explore more while spending less! Our budget-friendly option helps you save money without compromising on adventure. Enjoy cost-effective stays, affordable dining, and wallet-friendly experiences.",
    icon: "💰",
  },
  {
    label: "Moderate",
    desc: "A balanced approach to travel! Enjoy a mix of comfort and affordability with mid-range accommodations, diverse dining choices, and experiences that offer great value without overspending.",
    icon: "💵",
  },
  {
    label: "Luxury",
    desc: "Indulge in the finest experiences! Enjoy premium accommodations, gourmet dining, and exclusive activities for a lavish and stress-free getaway. Travel in style with the best amenities and services.",
    icon: "✨",
  },
];

const companionOptions = [
  {
    label: "Just Me",
    desc: "Embark on a journey of self-discovery! Travel at your own pace, explore hidden gems, and enjoy the freedom of solo adventures with personalized experiences just for you.",
    icon: " 🧳",
  },
  {
    label: "A Couple",
    desc: "Romance and adventure await! Whether it’s a honeymoon, anniversary, or just a getaway for two, enjoy special moments, scenic escapes, and unforgettable shared experiences.",
    icon: "💑",
  },
  {
    label: "Family",
    desc: "Create lifelong memories with your loved ones! Family-friendly destinations, exciting activities for all ages, and hassle-free travel plans make your trip fun and stress-free.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    label: "Friends",
    desc: "Adventure is better together! Explore new places, try thrilling activities, and make unforgettable memories with your closest friends on an exciting group trip.",
    icon: "🏄",
  },
];

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
          placeholder="Ex. 3"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none"
          value={tourData.tripDays}
          onChange={handleInputChange}
        />

        <h1 className="block text-gray-700 font-bold text-xl mt-10">
          What is Your Budget?
        </h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>

        <h2 className="block text-gray-700 font-bold text-xl mt-10">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
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
