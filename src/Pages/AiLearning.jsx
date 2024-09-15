import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";
import CardCategory from "../components/CardCategory";
import CardSlider from "../components/EsentialsTool";

function AiLearning({ darkMode }) {
    // Updated content for HeroSlider
    const sliderContent = [
        {
          title: "AI Revolution",
          description: "Explore the advancements AI is making in multiple industries.",
          image: "/10.jpeg",
          url: "/ai-revolution"
        },
        {
          title: "Next-Gen AI Models",
          description: "Learn about the future models shaping AI research and applications.",
          image: "/2.jpeg",
          url: "/next-gen-ai"
        },
        {
          title: "AI in Healthcare",
          description: "Discover the potential of AI in transforming healthcare.",
          image: "/4.jpeg",
          url: "/ai-healthcare"
        },
        {
          title: "AI and Automation",
          description: "How AI is automating workflows and enhancing productivity.",
          image: "/6.jpeg",
          url: "/ai-automation"
        },
        {
          title: "Cloud AI Solutions",
          description: "Leverage cloud-based AI tools for scalable solutions.",
          image: "/9.jpeg",
          url: "/cloud-ai"
        },
        {
          title: "AI for Developers",
          description: "Explore AI tools tailored for software developers.",
          image: "/7.jpeg",
          url: "/ai-developers"
        },
        {
          title: "Transformative AI Applications",
          description: "Explore various applications of AI across industries.",
          image: "/2.jpeg",
          url: "/transformative-ai"
        },
        {
          title: "AI in Vision Technologies",
          description: "Learn how AI is advancing computer vision and image processing.",
          image: "/1.jpeg",
          url: "/ai-vision"
        },
        {
          title: "AI in Education",
          description: "Understand how AI is personalizing education experiences.",
          image: "/9.jpeg",
          url: "/ai-education"
        },
        {
          title: "AI Research",
          description: "Stay updated with cutting-edge AI research.",
          image: "/6.jpeg",
          url: "/ai-research"
        }
      ];

    // Updated tabs for SlidingTabs
    const tabs = [
        "AI Revolution",
        "Next-Gen AI",
        "Healthcare AI",
        "Automation",
        "Cloud AI",
        "AI for Developers",
        "Transformative AI",
        "Vision Technologies",
        "AI in Education",
        "AI Research"
    ];

    // Updated content for CustomSlider
    const sliderContents = [
        {
          title: "AI in Healthcare",
          description: "Discover AI's transformative role in enhancing healthcare services.",
          image: "/4.jpeg",
        },
        {
          title: "AI for Software Developers",
          description: "Tools and platforms that make AI more accessible for developers.",
          image: "/2.jpeg",
        },
        {
          title: "AI in Retail",
          description: "Explore how AI is optimizing retail and improving customer experiences.",
          image: "/10.jpeg",
        },
        {
          title: "AI-Powered Automation",
          description: "Automation tools powered by AI to boost productivity and efficiency.",
          image: "/4.jpeg",
        },
        {
          title: "AI in Finance",
          description: "Understand AI's role in shaping the future of finance and risk management.",
          image: "/5.jpeg",
        },
        {
          title: "AI for Education",
          description: "Transforming education with personalized learning through AI.",
          image: "/6.jpeg",
        },
        {
          title: "Natural Language Processing (NLP)",
          description: "Learn about the latest advancements in NLP models and applications.",
          image: "/7.jpeg",
        },
        {
          title: "AI for Computer Vision",
          description: "How AI is revolutionizing the field of image recognition and analysis.",
          image: "/8.jpeg",
        },
        {
          title: "AI for Enterprise",
          description: "Explore enterprise AI tools for business intelligence and decision-making.",
          image: "/9.jpeg",
        },
        {
          title: "AI in Sports",
          description: "How AI is being used to enhance sports analytics and performance tracking.",
          image: "/10.jpeg",
        },
    ];

    // Updated content for CardSlider
    const CardsliderContent = [
        {
          title: "AI in Manufacturing",
          description: "Learn how AI is streamlining production and supply chains.",
          image: "/1.jpeg",
          url: "/tool/ai-manufacturing"
        },
        {
          title: "AI and Sustainability",
          description: "Discover AI's role in promoting sustainability and eco-friendly solutions.",
          image: "/2.jpeg",
          url: "/tool/ai-sustainability"
        },
        {
          title: "AI in Education",
          description: "AI’s impact on personalized learning and educational tools.",
          image: "/3.jpeg",
          url: "/tool/ai-education"
        },
        {
          title: "AI for Media",
          description: "Explore how AI is changing the landscape of media and content creation.",
          image: "/4.jpeg",
          url: "/tool/ai-media"
        },
        {
          title: "AI in Retail",
          description: "AI-driven solutions to enhance customer shopping experiences.",
          image: "/5.jpeg",
          url: "/tool/ai-retail"
        },
        {
          title: "AI for Business",
          description: "AI tools for improving business processes and decision-making.",
          image: "/6.jpeg",
          url: "/tool/ai-business"
        },
        {
          title: "AI in Finance",
          description: "How AI is reshaping financial services, investments, and risk management.",
          image: "/7.jpeg",
          url: "/tool/ai-finance"
        },
        {
          title: "AI in Transportation",
          description: "The future of AI in autonomous vehicles and logistics.",
          image: "/8.jpeg",
          url: "/tool/ai-transportation"
        },
        {
          title: "AI for Social Good",
          description: "Learn about AI initiatives aimed at solving global challenges.",
          image: "/9.jpeg",
          url: "/tool/ai-social-good"
        },
        {
          title: "AI in Entertainment",
          description: "AI's influence on content generation and user engagement in entertainment.",
          image: "/10.jpeg",
          url: "/tool/ai-entertainment"
        },
    ];

    return (
      <div>
        <HeroSlider sliderContent={sliderContent} darkMode={darkMode} />
        <SlidingTabs tabs={tabs} darkMode={darkMode} />
        <CustomSlider sliderContent={sliderContents} darkMode={darkMode} />
        <CardSlider darkMode={darkMode} />
        <CardCategory CardsliderContent={CardsliderContent} mainTitle="Best AI Models" />
      </div>
    );
}

export default AiLearning;
