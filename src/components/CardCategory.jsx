import React, { useRef } from "react";
import Slider from "react-slick";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { FaAnglesRight, FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled MUI Card for hover animation
const StyledCard = styled(Card)(({ theme }) => ({
  // overflow: "hidden",
  transition: "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out",
  "&:hover": {
    transform: "scale(1.15)",
    boxShadow: theme.shadows[6],
  },
}));

function CardCategory({ mainTitle, CardsliderContent }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

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
    <div className="slider-container mt-3 ">
      <div className="w-full flex justify-between items-center mb-4">
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
        {CardsliderContent.map((val, index) => (
          <Box key={index} sx={{ p: 1 }}>
            <StyledCard>
              <CardMedia
                component="img"
                height="250"
                image={val.image}
                alt={val.title}
              />
              <CardContent sx={{ textAlign: "left" }} className="">
                <Typography variant="h6" fontWeight="bold">
                  {val.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {val.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => navigate(`${val.url}`)}
                  sx={{ mt: 1 }}
                >
                  Explore
                </Button>
              </CardContent>
            </StyledCard>
          </Box>
        ))}
      </Slider>
    </div>
  );
}

export default CardCategory;
