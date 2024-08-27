import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const sliderContent = [
  {
    title: "AI Revolution",
    description: "Explore how AI is transforming industries across the globe.",
    image: "/5.jpeg",
  },
  {
    title: "AI Revolution",
    description: "Explore how AI is transforming industries across the globe.",
    image: "/3.jpeg",
  },
  {
    title: "AI in Healthcare",
    description: "AI's impact on improving patient outcomes.",
    image: "/1.jpeg",
  },
  {
    title: "AI in Education",
    description: "The future of personalized learning through AI.",
    image: "/2.jpeg",
  },
  {
    title: "AI in Media",
    description: "AI's role in the evolution of media consumption.",
    image: "/3.jpeg",
  },
  {
    title: "AI in Sports",
    description: "How AI is revolutionizing sports analytics.",
    image: "/4.jpeg",
  },
];

const HeroSlider = ({ darkMode }) => {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: thumbnailSliderRef.current,
    ref: mainSliderRef,
  };

  const thumbnailSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: mainSliderRef.current,
    ref: thumbnailSliderRef,
    centerMode: true,
    centerPadding: "10px",
    dots: false,
    arrows: true,
    infinite: true,
    beforeChange: (oldIndex, newIndex) => {
      mainSliderRef.current.slickGoTo(newIndex);
    },
  };

  return (
    <div className="relative bottom-0 w-full h-[500px]">
      {/* Main Slider */}
      <Slider {...settings} ref={mainSliderRef} className="relative z-10">
        {sliderContent.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-[500px] opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute top-[100px] left-10 p-8 z-20">
              <h1 className="text-white text-4xl font-bold">{slide.title}</h1>
              <p className="text-white mt-4 text-lg">{slide.description}</p>
            </div>
            <div className="absolute top-[230px] md:top-[200px] left-10 p-8 z-20">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                Explore More <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Thumbnail Slider */}
      <div className="absolute z-50 top-[400px] right-10 w-[300px] bg-[#00000070] p-1 rounded-md">
        <Slider {...thumbnailSettings} ref={thumbnailSliderRef}>
          {sliderContent.map((slide, index) => (
            <div key={index} className="px-2">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-[75px] rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
