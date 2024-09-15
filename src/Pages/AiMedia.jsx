import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";
import CardCategory from "../components/CardCategory";
import CardSlider from "../components/EsentialsTool";

function AiMedia({ darkMode }) {
    const sliderContent = [
        {
          title: "AI in Content Creation",
          description: "Explore how AI is transforming content creation, from automated writing to video generation.",
          image: "/10.jpeg",
          url: "/ai-content-creation"
        },
        {
          title: "AI in Media Personalization",
          description: "Learn how AI helps media platforms provide personalized recommendations and experiences.",
          image: "/2.jpeg",
          url: "/ai-media-personalization"
        },
        {
          title: "AI-Driven Advertising",
          description: "Discover how AI is revolutionizing digital advertising through targeting and automation.",
          image: "/4.jpeg",
          url: "/ai-advertising"
        },
        {
          title: "AI in Video and Audio Editing",
          description: "Understand how AI tools are enhancing video and audio editing with automated features.",
          image: "/6.jpeg",
          url: "/ai-video-audio-editing"
        },
        {
          title: "AI in Journalism",
          description: "See how AI is assisting journalists by automating reporting and data analysis.",
          image: "/9.jpeg",
          url: "/ai-journalism"
        },
        {
          title: "AI in Social Media Analytics",
          description: "Explore AI's role in analyzing social media trends and optimizing engagement strategies.",
          image: "/7.jpeg",
          url: "/ai-social-media"
        },
        {
          title: "AI for Visual Effects (VFX)",
          description: "Learn about AI’s impact on the VFX industry, automating complex visual tasks.",
          image: "/2.jpeg",
          url: "/ai-vfx"
        },
        {
          title: "AI in Streaming Services",
          description: "Discover how AI is optimizing streaming services by managing content delivery and bandwidth.",
          image: "/1.jpeg",
          url: "/ai-streaming"
        },
        {
          title: "AI in Gaming",
          description: "Understand how AI is enhancing game design, character behaviors, and player experiences.",
          image: "/9.jpeg",
          url: "/ai-gaming"
        },
        {
          title: "AI in Music Production",
          description: "See how AI is influencing music production, from composing to mixing tracks.",
          image: "/6.jpeg",
          url: "/ai-music-production"
        }
      ];

      const tabs = [
        "AI Models",
        "AI in Media",
        "AI in Content Creation",
        "AI in Advertising",
        "AI in Journalism",
        "AI in Visual Effects",
        "AI in Music",
        "AI in Gaming",
        "AI in Social Media",
        "AI in Streaming",
        "AI and Personalization",
        "AI Applications",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning"
      ];

      const sliderContents = [
        {
          title: "AI in Content Creation",
          description: "Explore AI tools that assist in creating written, visual, and video content.",
          image: "/4.jpeg", // Image URL remains the same
        },
        {
          title: "AI in Personalization",
          description: "Learn how AI enhances personalization on media platforms to deliver tailored content.",
          image: "/2.jpeg", // Image URL remains the same
        },
        {
          title: "AI in Digital Advertising",
          description: "Discover how AI optimizes ad targeting and automates ad placements.",
          image: "/10.jpeg", // Image URL remains the same
        },
        {
          title: "AI in Video Editing",
          description: "Understand the automation of video editing through AI, making production faster and more efficient.",
          image: "/4.jpeg", // Image URL remains the same
        },
        {
          title: "AI in Social Media",
          description: "See how AI helps analyze trends and optimize engagement on social media platforms.",
          image: "/5.jpeg", // Image URL remains the same
        },
        {
          title: "AI in Journalism",
          description: "Learn how AI assists journalists in automating data collection and report generation.",
          image: "/6.jpeg", // Image URL remains the same
        },
        {
          title: "AI for VFX",
          description: "Explore how AI streamlines complex visual effects workflows in film and media.",
          image: "/7.jpeg", // Image URL remains the same
        },
        {
          title: "AI in Music Production",
          description: "See how AI is being used to compose music and mix tracks with minimal human intervention.",
          image: "/8.jpeg", // Image URL remains the same
        },
        {
          title: "AI in Gaming",
          description: "Understand how AI enhances game dynamics, AI-driven NPC behaviors, and player interactions.",
          image: "/9.jpeg", // Image URL remains the same
        },
        {
          title: "AI in Streaming",
          description: "Discover AI’s role in managing content delivery and improving user experiences in streaming platforms.",
          image: "/10.jpeg", // Image URL remains the same
        }
      ];

      const CardsliderContent = [
        {
          title: "AI in Content Creation",
          description: "See how AI tools are helping create text, image, and video content in media.",
          image: "/1.jpeg",
          url:"tool/ai-content-creation"
        },
        {
          title: "AI in Advertising",
          description: "Discover AI-driven digital advertising strategies that are transforming the industry.",
          image: "/2.jpeg",
          url:"tool/ai-advertising"
        },
        {
          title: "AI in Journalism",
          description: "Learn about AI’s influence on journalism, from automated news reports to data-driven analysis.",
          image: "/3.jpeg",
          url:"tool/ai-journalism"
        },
        {
          title: "AI in Video Production",
          description: "AI is automating video production, allowing faster editing and enhancing storytelling.",
          image: "/4.jpeg",
          url:"tool/ai-video-production"
        },
        {
          title: "AI in Music",
          description: "AI in music composition and mixing is changing how we create and consume music.",
          image: "/5.jpeg",
          url:"tool/ai-music"
        },
        {
          title: "AI in Social Media",
          description: "See how AI improves social media engagement and trend analysis.",
          image: "/6.jpeg",
          url:"tool/ai-social-media"
        },
        {
          title: "AI in Gaming",
          description: "AI in gaming enhances player experiences through smarter NPCs and adaptive gameplay.",
          image: "/7.jpeg",
          url:"tool/ai-gaming"
        },
        {
          title: "AI in Streaming",
          description: "Understand how AI optimizes streaming content delivery and user experiences.",
          image: "/8.jpeg",
          url:"tool/ai-streaming"
        },
        {
          title: "AI in Visual Effects",
          description: "Discover how AI streamlines VFX workflows and enhances visual storytelling.",
          image: "/9.jpeg",
          url:"tool/ai-vfx"
        },
        {
          title: "AI in Media Analytics",
          description: "Learn about AI’s role in analyzing media consumption patterns and optimizing content strategies.",
          image: "/10.jpeg",
          url:"tool/ai-media-analytics"
        },
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
        <CardCategory CardsliderContent={CardsliderContent} mainTitle="AI in Media Applications" />
      </div>
    );
}

export default AiMedia;
