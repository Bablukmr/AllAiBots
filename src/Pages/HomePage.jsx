import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";
import CardCategory from "../components/CardCategory";

function HomePage({ darkMode }) {
  return (
    <div>
      <HeroSlider darkMode={darkMode}></HeroSlider>
      <SlidingTabs darkMode={darkMode}></SlidingTabs>
      <CustomSlider darkMode={darkMode}></CustomSlider>
      <CardCategory mainTitle="Best AI Tool" />
      <CardCategory mainTitle="Best AI For graphics" />
      <CardCategory mainTitle="Best AI For Web Development" />
    </div>
  );
}

export default HomePage;
