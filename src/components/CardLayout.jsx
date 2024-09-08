import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomSlider = ({ darkMode, sliderContent }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Large tablets and small desktops
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="px-8 mt-6">
      {sliderContent.map((content, index) => (
        <div key={index} className="relative p-2">
          <img
            src={content.image}
            alt={content.title}
            className="rounded-lg w-full h-64 object-cover transition duration-500 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-white text-2xl font-bold mb-2 text-center">
              {content.title}
            </h2>
            <p className="text-white text-lg mb-4 text-center px-4">
              {content.description}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
