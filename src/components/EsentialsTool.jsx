import React from 'react';
import Slider from "react-slick";
import { Button } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Card data
const cards = [
  { title: "TikTok", rating: 4.3, free: true, image: "/5.jpeg" },
  { title: "Adobe Acrobat ", rating: 3.1, free: true, image: "/1.jpeg" },
  { title: "LinkedIn", rating: 3.9, free: true, image: "/5.jpeg" },
  { title: "Threads", rating: 4.5, free: true, image: "/2.jpeg" },
  { title: "BreeZip", rating: 4.7, free: true, image: "/8.jpeg" },
  // Add more cards as necessary
];

function CardSlider({ darkMode }) {
  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={`flex p-5 py-8 justify-between items-center  ${darkMode ? 'bg-gradient-to-r from-brown-900 to-purple-900' : 'bg-gradient-to-r from-pink-200 to-purple-200'}`}>
      {/* Left Side Content */}
      <div className={`w-[30%] space-y-4 ${darkMode ? 'text-white' : 'text-black'}`}>
        <h2 className="text-3xl md:text-4xl font-bold">Popular AI Tools </h2>
        <p className="text-lg md:text-xl">Take your Windows experience to new heights with these must-have apps.</p>
        <Button className={`mt-4 ${darkMode ? 'bg-purple-700' : 'bg-purple-500'} text-white`} variant="contained" size="large">
          See all
        </Button>
      </div>

      {/* Right Side Slider */}
      <div className="w-2/3">
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <div key={index} className="px-4">
              <div className={`rounded-lg p-6 shadow-lg text-center transition-all duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <img src={card.image} alt={card.title} className="h-32 w-full object-contain mb-4" />
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p>Rating: {card.rating}</p>
                <p>{card.free ? "Free" : "Paid"}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardSlider;
