import React from "react";

const Itinerary = ({ itinerary }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4 font-inter">
        Itinerary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(itinerary || {}).map(([day, details]) => (
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

export default Itinerary;
