import React from 'react';
import Slider from "react-slick";
import { Button } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Card data
const cards = [
  { title: "TikTok", rating: 4.3, free: true, image: "/5.jpeg" },
  { title: "Adobe Acrobat", rating: 3.1, free: true, image: "/1.jpeg" },
  { title: "LinkedIn", rating: 3.9, free: true, image: "/5.jpeg" },
  { title: "Threads", rating: 4.5, free: true, image: "/2.jpeg" },
  { title: "BreeZip", rating: 4.7, free: true, image: "/8.jpeg" },
  // Add more cards as necessary
];

function CardSlider({ darkMode }) {
  // Slick slider settings with responsive adjustments
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 2,
          arrows: false, // Hide arrows for smaller screens
        },
      },
    ],
  };

  return (
    <div className={`flex flex-col md:flex-row p-5 py-8 justify-between items-center  ${darkMode ? 'bg-gradient-to-r from-amber-500 to-pink-500' : 'bg-gradient-to-r from-teal-400 to-yellow-200'}`}>
      {/* Left Side Content */}
      <div className={`md:w-[30%] space-y-4 ${darkMode ? 'text-white' : 'text-black'} mb-6 md:mb-0`}>
        <h2 className="text-2xl md:text-4xl font-bold">Popular AI Tools</h2>
        <p className="text-base md:text-lg">Take your Windows experience to new heights with these must-have apps.</p>
        <Button className={`mt-4 ${darkMode ? 'bg-purple-700' : 'bg-purple-500'} text-white`} variant="contained" size="large">
          See all
        </Button>
      </div>

      {/* Right Side Slider */}
      <div className="w-full md:w-2/3">
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2 md:px-4">
              <div className={`rounded-lg p-4 md:p-6 shadow-lg text-center transition-all duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <img src={card.image} alt={card.title} className="h-24 md:h-32 w-full object-contain mb-2 md:mb-4" />
                <h3 className="text-sm md:text-lg font-bold">{card.title}</h3>
                <p className="text-sm">Rating: {card.rating}</p>
                <p className="text-sm">{card.free ? "Free" : "Paid"}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardSlider;
