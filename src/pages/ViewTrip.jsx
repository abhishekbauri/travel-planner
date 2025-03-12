import React from "react";
import { useLocation } from "react-router-dom";

const ViewTrip = () => {
  const location = useLocation();
  const { tripDetails } = location.state || {};

  return (
    <div className=" bg-white min-h-screen p-6 rounded-lg shadow-lg">
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
      <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-4 font-inter">
        Hotel Options
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tripDetails?.hotelOptions?.map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:drop-shadow-xl ease-in-out hover:-translate-y-3 transition duration-300"
          >
            <img
              src={"/hotel.jpg" || hotel?.image}
              alt={hotel?.name}
              className="w-full h-50 object-cover overflow-hidden rounded-t-md"
            />
            <div className="p-4 font-nunito">
              <h3 className="text-lg font-bold ">{hotel?.name}</h3>
              <p className="text-sm text-gray-600">{hotel?.address}</p>
              <p className="text-sm text-gray-700 font-semibold">
                Price: {hotel?.price}
              </p>
              <p className="text-sm text-yellow-500 ">
                Rating: <span className="font-bold">{hotel?.rating} ⭐</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Itinerary */}
      <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4 font-inter">
        Itinerary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(tripDetails?.itinerary || {}).map(([day, details]) => (
          <div key={day} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-center text-xl text-gray-900 capitalize font-bold font-playfair-display">
              {day}
            </h2>
            <h3 className="text-lg font-semibold text-center font-inter">
              {details?.title}
            </h3>
            <ul className="mt-2 font-nunito">
              {details?.activities?.map((activity, index) => (
                <li
                  key={index}
                  className="p-2 border-b last:border-b-0 hover:bg-gray-200 hover:rounded-md transition ease-in-out duration-100"
                >
                  <strong>{activity?.placeName}</strong>: {activity?.details}
                  <p className="text-sm text-gray-500">
                    Best Time: {activity?.bestVisitingTime}
                  </p>
                  <p className="text-sm text-gray-500">
                    Duration: {activity?.duration}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTrip;
