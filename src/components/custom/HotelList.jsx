import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 1.5, ease: "easeInOut" },
  },
};

const HotelList = ({ hotelOptions }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-4 font-inter">
        Hotel Options
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {hotelOptions?.map((hotel, index) => (
          <Link
            key={index}
            to={`https://www.google.com/maps/search/?api=1&query=${hotel?.name},${hotel?.address}`}
            target="_blank"
          >
            <div className="bg-white rounded-lg shadow-md hover:drop-shadow-xl ease-in-out hover:-translate-y-3 transition duration-300">
              <img
                src={"/hotel.jpg" || hotel?.image}
                alt={hotel?.name}
                className="w-full h-50 object-cover overflow-hidden rounded-t-md"
                loading="lazy"
              />
              <div className="p-4 font-nunito">
                <h3 className="text-lg font-bold truncate">{hotel?.name}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {hotel?.address}
                </p>
                <p className="text-sm text-gray-700 font-semibold truncate">
                  Price: <span className="font-bold">{hotel?.price}</span>
                </p>
                <p className="text-sm text-yellow-500">
                  Rating: <span className="font-bold">{hotel?.rating} ⭐</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default HotelList;
