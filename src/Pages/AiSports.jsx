import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";
import CardCategory from "../components/CardCategory";
import CardSlider from "../components/EsentialsTool";

function AiSports({ darkMode }) {
    const sliderContent = [
        {
          title: "AI in Football",
          description: "Explore how AI is being used for game strategy and player performance analysis in football.",
          image: "/10.jpeg",
          url: "/ai-football"
        },
        {
          title: "AI in Basketball",
          description: "Discover how AI is enhancing shooting accuracy and player efficiency in basketball.",
          image: "/2.jpeg",
          url: "/ai-basketball"
        },
        {
          title: "AI in Tennis",
          description: "Learn about AI's role in analyzing player movements and improving match predictions in tennis.",
          image: "/4.jpeg",
          url: "/ai-tennis"
        },
        {
          title: "AI in Cricket",
          description: "Understand how AI is revolutionizing team selection and performance analysis in cricket.",
          image: "/6.jpeg",
          url: "/ai-cricket"
        },
        {
          title: "AI in Racing",
          description: "See how AI is optimizing race car performance and strategy in Formula 1 racing.",
          image: "/9.jpeg",
          url: "/ai-racing"
        },
        {
          title: "AI in eSports",
          description: "Explore the rise of AI in eSports for player training and competition analysis.",
          image: "/7.jpeg",
          url: "/ai-esports"
        }
      ];

    const tabs = [
        "AI in Football",
        "AI in Basketball",
        "AI in Tennis",
        "AI in Cricket",
        "AI in Racing",
        "AI in eSports",
        "AI in Performance Analysis",
        "AI in Sports Broadcasting",
        "AI in Wearable Technology",
        "AI in Injury Prevention",
      ];

    const sliderContents = [
        {
          title: "AI in Football",
          description: "Explore how AI is used to analyze player performance and optimize game strategies in football.",
          image: "/4.jpeg",
        },
        {
          title: "AI in Basketball",
          description: "Discover how AI enhances player shooting accuracy and team efficiency in basketball.",
          image: "/2.jpeg",
        },
        {
          title: "AI in Tennis",
          description: "Learn how AI technology is used to analyze player movements and improve game predictions.",
          image: "/10.jpeg",
        },
        {
          title: "AI in Cricket",
          description: "Understand AI’s role in optimizing team selection and analyzing player performance in cricket.",
          image: "/4.jpeg",
        },
        {
          title: "AI in Racing",
          description: "See how AI helps optimize vehicle performance and strategy in competitive racing.",
          image: "/5.jpeg",
        },
        {
          title: "AI in eSports",
          description: "Explore how AI is transforming player training and game strategy in the fast-growing world of eSports.",
          image: "/6.jpeg",
        },
      ];

    const CardsliderContent = [
        {
          title: "AI in Football",
          description: "AI's impact on performance analysis and strategy optimization in football.",
          image: "/1.jpeg",
          url:"tool/ai-football"
        },
        {
          title: "AI in Basketball",
          description: "Discover AI’s role in player training and game performance analysis in basketball.",
          image: "/2.jpeg",
          url:"tool/ai-basketball"
        },
        {
          title: "AI in Tennis",
          description: "AI's influence on predicting match outcomes and analyzing player movements in tennis.",
          image: "/3.jpeg",
          url:"tool/ai-tennis"
        },
        {
          title: "AI in Cricket",
          description: "AI's role in team performance and player selection analysis in cricket.",
          image: "/4.jpeg",
          url:"tool/ai-cricket"
        },
        {
          title: "AI in eSports",
          description: "How AI is transforming training and strategy in the world of eSports.",
          image: "/5.jpeg",
          url:"tool/ai-esports"
        },
        {
          title: "AI in Racing",
          description: "How AI is improving race car performance and race strategy.",
          image: "/6.jpeg",
          url:"tool/ai-racing"
        }
      ];

  return (
    <div>
      <HeroSlider
      
        sliderContent={sliderContent}
        darkMode={darkMode}
      ></HeroSlider>
      <SlidingTabs tabs={tabs} darkMode={darkMode}></SlidingTabs>
      <CustomSlider sliderContent={sliderContents} darkMode={darkMode}></CustomSlider>
      <CardSlider darkMode={darkMode}/>
      <CardCategory CardsliderContent={CardsliderContent} mainTitle="AI in Sports" />
    </div>
  );
}

export default AiSports;
