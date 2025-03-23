import React from "react";
import { useLocation } from "react-router-dom";
import Itinerary from "@/components/custom/Itinerary";
import HotelList from "@/components/custom/HotelList";

const ViewTrip = () => {
  const location = useLocation();
  const { tripDetails } = location.state || {};

  return (
    <div className="bg-white min-h-screen p-6 rounded-lg shadow-lg">
      {/* Trip Overview */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2 mt-8 text-center font-playfair-display">
        {tripDetails?.tripName || "Trip Name"}
      </h1>
      <p className="text-gray-600 text-center font-nunito">
        Duration: {tripDetails?.duration || "N/A"} | Location:{" "}
        {tripDetails?.location || "N/A"} | Budget:{" "}
        {tripDetails?.budget || "N/A"}
      </p>

      {/* Hotel List */}
      <HotelList hotelOptions={tripDetails?.hotelOptions} />

      {/* Itinerary */}
      <Itinerary itinerary={tripDetails?.itinerary} />
    </div>
  );
};

export default ViewTrip;
