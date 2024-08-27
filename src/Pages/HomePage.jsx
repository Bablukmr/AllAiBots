import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";

function HomePage({darkMode}) {
  return (
    <div>
      <HeroSlider darkMode={darkMode}></HeroSlider>
      <SlidingTabs darkMode={darkMode}></SlidingTabs>
      <CustomSlider darkMode={darkMode}></CustomSlider>
    </div>
  );
}

export default HomePage;
