import React, { useState } from "react";
import Slider from "react-slick";

const tabs = [
  "Home",
  "AI Models",
  "Datasets",
  "Analytics",
  "AI Tools",
  "AI Learning",
  "AI in Media",
  "AI Movies",
  "AI in Sports",
  "Categories",
  "Software development",
];

const SlidingTabs = ({ darkMode }) => {
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`mx-5 py-2 px-4 `}>
      <Slider {...settings} className="flex items-center space-x-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-shrink-0 p-2 rounded-full cursor-pointer text-center whitespace-nowrap ${
              index === 0
                ? darkMode
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
                : darkMode
                ? "bg-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition"
                : "bg-gray-200 text-black hover:bg-gray-300 transition"
            }`}
            style={{ minWidth: "130px", marginRight: "10px"}} // Adjust min-width and gap as needed
          >
            {tab}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlidingTabs;
