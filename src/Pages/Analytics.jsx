import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";
import CardCategory from "../components/CardCategory";
import CardSlider from "../components/EsentialsTool";

function Analytics({ darkMode }) {
    // Content for the HeroSlider
    const sliderContent = [
        {
          title: "Data Analytics with GPT-4",
          description: "Explore how GPT-4 enhances data-driven decision-making with advanced analytics.",
          image: "/10.jpeg",
          url: "/gpt4-analytics"
        },
        {
          title: "Google Analytics and BERT",
          description: "Discover how BERT boosts contextual analysis in Google Analytics.",
          image: "/2.jpeg",
          url: "/bert-analytics"
        },
        {
          title: "IBM Watson for Business Analytics",
          description: "Learn how IBM Watson is applied for in-depth business analytics solutions.",
          image: "/4.jpeg",
          url: "/watson-analytics"
        },
        {
          title: "AlphaFold in Data Science",
          description: "Understand how AlphaFold models are used in biological data analysis.",
          image: "/6.jpeg",
          url: "/alphafold-analytics"
        },
        {
          title: "Azure AI for Big Data",
          description: "See how Microsoft Azure AI transforms big data analytics in the cloud.",
          image: "/9.jpeg",
          url: "/azure-ai-analytics"
        },
        {
          title: "SageMaker for Predictive Analytics",
          description: "Explore Amazon SageMaker's power in building predictive analytics models.",
          image: "/7.jpeg",
          url: "/sagemaker-analytics"
        },
        {
          title: "Hugging Face for Data Mining",
          description: "Learn how Hugging Face tools are revolutionizing natural language data mining.",
          image: "/2.jpeg",
          url: "/transformers-analytics"
        },
        {
          title: "OpenCV in Visual Data Analytics",
          description: "Discover how OpenCV is utilized in image-based data analytics.",
          image: "/1.jpeg",
          url: "/opencv-analytics"
        },
        {
          title: "TensorFlow in Predictive Models",
          description: "Understand TensorFlow’s role in creating accurate predictive analytics models.",
          image: "/9.jpeg",
          url: "/tensorflow-analytics"
        },
        {
          title: "PyTorch for Advanced Analytics",
          description: "See how PyTorch drives flexible analytics and deep learning research.",
          image: "/6.jpeg",
          url: "/pytorch-analytics"
        }
      ];

    // Tabs specific to Analytics
    const tabs = [
        "Data Science Models",
        "AI Tools",
        "Datasets",
        "Analytics Tools",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization",
        "Natural Language Processing",
        "Big Data",
        "Computer Vision",
        "Deep Learning",
        "AI Applications",
        "AI in Healthcare",
        "AI in Finance",
        "AI in Retail",
        "AI in Marketing",
    ];

    // Content for the CustomSlider
    const sliderContents = [
        {
          title: "Data-Driven Insights with GPT-4",
          description: "Explore how GPT-4 revolutionizes data analytics with cutting-edge text generation.",
          image: "/4.jpeg",
        },
        {
          title: "BERT in Analytics",
          description: "Discover BERT's impact on contextual analysis for data-driven insights.",
          image: "/2.jpeg",
        },
        {
          title: "Business Analytics with IBM Watson",
          description: "Learn how IBM Watson transforms business operations with advanced analytics.",
          image: "/10.jpeg",
        },
        {
          title: "AlphaFold and Biological Data Analysis",
          description: "Understand how AlphaFold is enhancing protein data analysis and predictions.",
          image: "/4.jpeg",
        },
        {
          title: "Azure AI and Big Data Analytics",
          description: "See how Azure AI tools empower scalable data analytics in the cloud.",
          image: "/5.jpeg",
        },
        {
          title: "SageMaker for Predictive Analytics",
          description: "Explore how SageMaker supports predictive modeling and data insights.",
          image: "/6.jpeg",
        },
        {
          title: "Hugging Face for NLP Analytics",
          description: "Learn about Hugging Face's role in NLP-based data analytics.",
          image: "/7.jpeg",
        },
        {
          title: "OpenCV for Visual Data",
          description: "Discover OpenCV’s capabilities for image-based data analytics and insights.",
          image: "/8.jpeg",
        },
        {
          title: "TensorFlow in Analytics",
          description: "Understand TensorFlow’s role in predictive analytics and data modeling.",
          image: "/9.jpeg",
        },
        {
          title: "Advanced Analytics with PyTorch",
          description: "See how PyTorch is advancing deep learning and analytics research.",
          image: "/10.jpeg",
        },
      ];

    // Content for the CardSlider
    const CardsliderContent = [
        {
          title: "AI-Powered Data Analytics",
          description: "Explore how AI transforms data analytics across industries.",
          image: "/1.jpeg",
          url:"tool/ai-data-analytics"
        },
        {
          title: "Automation in Data Analytics",
          description: "Discover how AI-driven automation is streamlining analytics workflows.",
          image: "/2.jpeg",
          url:"tool/ai-automation-analytics"
        },
        {
          title: "AI for Healthcare Analytics",
          description: "AI's impact on patient data analysis and improving healthcare outcomes.",
          image: "/3.jpeg",
          url:"tool/ai-healthcare-analytics"
        },
        {
          title: "AI in Education Analytics",
          description: "The future of personalized learning through AI-driven data analysis.",
          image: "/4.jpeg",
          url:"tool/ai-education-analytics"
        },
        {
          title: "Media Analytics with AI",
          description: "AI's role in media consumption and audience data analytics.",
          image: "/5.jpeg",
          url:"tool/ai-media-analytics"
        },
        {
          title: "Sports Analytics with AI",
          description: "How AI is revolutionizing sports data analysis and performance metrics.",
          image: "/6.jpeg",
          url:"tool/ai-sports-analytics"
        },
        {
          title: "Retail Analytics with AI",
          description: "Enhancing customer experiences and retail performance through AI.",
          image: "/7.jpeg",
          url:"tool/ai-retail-analytics"
        },
        {
          title: "Finance Analytics with AI",
          description: "AI's role in improving financial decision-making and risk management.",
          image: "/8.jpeg",
          url:"tool/ai-finance-analytics"
        },
        {
          title: "AI in Transportation Analytics",
          description: "Self-driving cars and AI's future role in transportation data analytics.",
          image: "/9.jpeg",
          url:"tool/ai-transportation-analytics"
        },
        {
          title: "Entertainment Analytics with AI",
          description: "AI's influence on content creation and entertainment data analytics.",
          image: "/10.jpeg",
          url:"tool/ai-entertainment-analytics"
        },
      ];

    return (
      <div>
        <HeroSlider
          sliderContent={sliderContent}
          darkMode={darkMode}
        />
        <SlidingTabs tabs={tabs} darkMode={darkMode} />
        <CustomSlider sliderContent={sliderContents} darkMode={darkMode} />
        <CardSlider darkMode={darkMode} />
        <CardCategory CardsliderContent={CardsliderContent} mainTitle="Best AI Models in Analytics" />
      </div>
    );
}

export default Analytics;
