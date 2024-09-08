import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";
import CardCategory from "../components/CardCategory";

function HomePage({ darkMode }) {
  const sliderContent = [
    {
      title: "AI Revolution",
      description: "Explore how AI is transforming industries across the globe.",
      image: "/1.jpeg",
    },
    {
      title: "AI and Automation",
      description: "Discover the future of work with AI-driven automation.",
      image: "/2.jpeg",
    },
    {
      title: "AI in Healthcare",
      description: "AI's impact on improving patient outcomes.",
      image: "/3.jpeg",
      url:"/healthcare"
    },
    {
      title: "AI in Education",
      description: "The future of personalized learning through AI.",
      image: "/4.jpeg",
    },
    {
      title: "AI in Media",
      description: "AI's role in the evolution of media consumption.",
      image: "/5.jpeg",
    },
    {
      title: "AI in Sports",
      description: "How AI is revolutionizing sports analytics.",
      image: "/6.jpeg",
    },
    {
      title: "AI in Retail",
      description: "Enhancing customer experiences with AI in retail.",
      image: "/7.jpeg",
    },
    {
      title: "AI in Finance",
      description: "AI's impact on financial decision-making and risk management.",
      image: "/8.jpeg",
    },
    {
      title: "AI in Transportation",
      description: "Self-driving cars and the future of AI in transportation.",
      image: "/9.jpeg",
    },
    {
      title: "AI in Entertainment",
      description: "AI's influence on content creation and entertainment.",
      image: "/10.jpeg",
    },
  ];
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
  const sliderContents = [
    {
      title: "AI Revolution",
      description: "Explore how AI is transforming industries across the globe.",
      image: "/1.jpeg",
    },
    {
      title: "AI and Automation",
      description: "Discover the future of work with AI-driven automation.",
      image: "/2.jpeg",
    },
    {
      title: "AI in Healthcare",
      description: "AI's impact on improving patient outcomes.",
      image: "/3.jpeg",
    },
    {
      title: "AI in Education",
      description: "The future of personalized learning through AI.",
      image: "/4.jpeg",
    },
    {
      title: "AI in Media",
      description: "AI's role in the evolution of media consumption.",
      image: "/5.jpeg",
    },
    {
      title: "AI in Sports",
      description: "How AI is revolutionizing sports analytics.",
      image: "/6.jpeg",
    },
    {
      title: "AI in Retail",
      description: "Enhancing customer experiences with AI in retail.",
      image: "/7.jpeg",
    },
    {
      title: "AI in Finance",
      description: "AI's impact on financial decision-making and risk management.",
      image: "/8.jpeg",
    },
    {
      title: "AI in Transportation",
      description: "Self-driving cars and the future of AI in transportation.",
      image: "/9.jpeg",
    },
    {
      title: "AI in Entertainment",
      description: "AI's influence on content creation and entertainment.",
      image: "/10.jpeg",
    },
  ];
  const CardsliderContent = [
    {
      title: "AI Revolution",
      description:
        "Explore how AI is transforming industries across the globe.",
      image: "/1.jpeg",
      url:"tool/ai-revolution"
    },
    {
      title: "AI and Automation",
      description: "Discover the future of work with AI-driven automation.",
      image: "/2.jpeg",
       url:"tool/ai-automation"
    },
    {
      title: "AI in Healthcare",
      description: "AI's impact on improving patient outcomes.",
      image: "/3.jpeg",
      url:"tool/ai-healthcare"
    },
    {
      title: "AI in Education",
      description: "The future of personalized learning through AI.",
      image: "/4.jpeg",
      url:"tool/ai-education"
    },
    {
      title: "AI in Media",
      description: "AI's role in the evolution of media consumption.",
      image: "/5.jpeg",
      url:"tool/ai-media"
    },
    {
      title: "AI in Sports",
      description: "How AI is revolutionizing sports analytics.",
      image: "/6.jpeg",
      url:"tool/ai-sports"
    },
    {
      title: "AI in Retail",
      description: "Enhancing customer experiences with AI in retail.",
      image: "/7.jpeg",
       url:"tool/ai-retail"
    },
    {
      title: "AI in Finance",
      description:
        "AI's impact on financial decision-making and risk management.",
      image: "/8.jpeg",
       url:"tool/ai-retail"
    },
    {
      title: "AI in Transportation",
      description: "Self-driving cars and the future of AI in transportation.",
      image: "/9.jpeg",
       url:"tool/ai-transportation"
    },
    {
      title: "AI in Entertainment",
      description: "AI's influence on content creation and entertainment.",
      image: "/10.jpeg",
       url:"tool/ai-entertainment"
    },
  ];
  return (
    <div>
      <HeroSlider sliderContent={sliderContent} darkMode={darkMode}></HeroSlider>
      <SlidingTabs darkMode={darkMode} tabs={tabs}></SlidingTabs>
      <CustomSlider sliderContent={sliderContents} darkMode={darkMode}></CustomSlider>
      <CardCategory CardsliderContent={CardsliderContent} mainTitle="Best AI Tool" />
      <CardCategory CardsliderContent={CardsliderContent} mainTitle="Best AI For graphics" />
      <CardCategory CardsliderContent={CardsliderContent} mainTitle="Best AI For Web Development" />
    </div>
  );
}

export default HomePage;
