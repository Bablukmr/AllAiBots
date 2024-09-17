import React, { useRef } from "react";
import Slider from "react-slick";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { FaAnglesRight, FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import { motion, useInView } from "framer-motion"; // Import useInView from framer-motion
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled MUI Card for hover animation
const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out",
  "&:hover": {
    transform: "scale(1.15)",
    boxShadow: theme.shadows[6],
    zIndex: 10, // Ensure the card is brought to the front when hovered
  },
}));

// Animation variants for framer-motion
const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.2, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
};

function CardCategory({ mainTitle, CardsliderContent }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Use useInView hook to trigger animation on scroll
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
    <motion.div
      className="slider-container mt-3 py-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate on scroll
      ref={containerRef} // Reference to the container
    >
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
          <Box 
            key={index} 
            sx={{ p: 0.7, overflow: 'visible' }} // Ensure the Box allows overflow
            className="md:h-[500px]"
          >
            {/* Use framer-motion's motion.div for animation on hover and scroll */}
            <motion.div
              whileHover="hover"
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={cardVariants}
              style={{ overflow: 'visible' }} // Ensure the motion.div allows overflow
            >
              <StyledCard>
                <CardMedia
                  component="img"
                  height="250"
                  image={val.image}
                  alt={val.title}
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {val.description.slice(0, 30)}...
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
            </motion.div>
          </Box>
        ))}
      </Slider>
    </motion.div>
  );
}

export default CardCategory;
