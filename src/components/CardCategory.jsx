import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

function CardCategory({ mainTitle }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const sliderContent = [
    {
      title: "AI Revolution",
      description:
        "Explore how AI is transforming industries across the globe.",
      image: "/1.jpeg",
      url:"ai-revolution"
    },
    {
      title: "AI and Automation",
      description: "Discover the future of work with AI-driven automation.",
      image: "/2.jpeg",
       url:"ai-automation"
    },
    {
      title: "AI in Healthcare",
      description: "AI's impact on improving patient outcomes.",
      image: "/3.jpeg",
      url:"ai-healthcare"
    },
    {
      title: "AI in Education",
      description: "The future of personalized learning through AI.",
      image: "/4.jpeg",
      url:"ai-education"
    },
    {
      title: "AI in Media",
      description: "AI's role in the evolution of media consumption.",
      image: "/5.jpeg",
      url:"ai-media"
    },
    {
      title: "AI in Sports",
      description: "How AI is revolutionizing sports analytics.",
      image: "/6.jpeg",
      url:"ai-sports"
    },
    {
      title: "AI in Retail",
      description: "Enhancing customer experiences with AI in retail.",
      image: "/7.jpeg",
       url:"ai-retail"
    },
    {
      title: "AI in Finance",
      description:
        "AI's impact on financial decision-making and risk management.",
      image: "/8.jpeg",
       url:"ai-retail"
    },
    {
      title: "AI in Transportation",
      description: "Self-driving cars and the future of AI in transportation.",
      image: "/9.jpeg",
       url:"ai-transportation"
    },
    {
      title: "AI in Entertainment",
      description: "AI's influence on content creation and entertainment.",
      image: "/10.jpeg",
       url:"ai-entertainment"
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container mt-3">
      <div className="w-full flex justify-between items-center">
        <Link
          to="/aa"
          className="text-base md:text-xl p-2 font-bold w-fit gap-1 flex items-center"
        >
          {mainTitle} <FaAnglesRight />
        </Link>
        <div className="flex items-center gap-1 px-2">
          <div className="hover:cursor-pointer" onClick={previous}>
            <FaCaretLeft size={24} />
          </div>
          <div className="hover:cursor-pointer" onClick={next}>
            <FaCaretRight size={24} />
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {sliderContent.map((val, index) => (
          <div
            key={index}
            className={`p-2 ${
              index === 0
                ? "transform-origin-left"
                : index === sliderContent.length - 1
                ? "transform-origin-right"
                : "transform-origin-center"
            }`}
          >
            <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-[1.5s] transform hover:scale-125 hover:z-10">
              <img
                src={val.image}
                alt={val.title}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white transition-opacity duration-[2s] opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{val.title}</h3>
                <p className="text-sm mt-2">{val.description}</p>
                <button
                  onClick={() => navigate(`tool/${val.url}`)}
                  className="mt-3 mb-4 bg-blue-500 hover:bg-blue-600 w-fit hover:cursor-pointer text-white py-1 px-2 rounded"
                >
                  Explore
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white z-10 text-lg font-bold transition-opacity duration-[2s] opacity-100 group-hover:opacity-0">
                {val.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardCategory;
