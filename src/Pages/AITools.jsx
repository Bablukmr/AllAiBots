import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";
import CardCategory from "../components/CardCategory";
import CardSlider from "../components/EsentialsTool";

function AITools({ darkMode }) {
    const sliderContent = [
        {
          title: "OpenAI GPT-4",
          description: "Explore how GPT-4 is advancing natural language understanding and generation.",
          image: "/10.jpeg",
          url: "/gpt4"
        },
        {
          title: "Google BERT",
          description: "Discover how BERT enhances search engine capabilities and contextual understanding.",
          image: "/2.jpeg",
          url: "/bert"
        },
        {
          title: "IBM Watson",
          description: "Learn about IBM Watson's applications in AI-driven business solutions.",
          image: "/4.jpeg",
          url: "/watson"
        },
        {
          title: "DeepMind AlphaFold",
          description: "Understand how AlphaFold is revolutionizing protein folding predictions.",
          image: "/6.jpeg",
          url: "/alphafold"
        },
        {
          title: "Microsoft Azure AI",
          description: "See how Azure AI tools are transforming cloud-based AI solutions.",
          image: "/9.jpeg",
          url: "/azure-ai"
        },
        {
          title: "Amazon SageMaker",
          description: "Explore SageMaker's capabilities for building, training, and deploying machine learning models.",
          image: "/7.jpeg",
          url: "/sagemaker"
        },
        {
          title: "Hugging Face Transformers",
          description: "Learn about the Transformers library and its impact on NLP tasks.",
          image: "/2.jpeg",
          url: "/transformers"
        },
        {
          title: "OpenCV",
          description: "Discover how OpenCV is used for computer vision applications and image processing.",
          image: "/1.jpeg",
          url: "/opencv"
        },
        {
          title: "TensorFlow",
          description: "Understand how TensorFlow is used for building and training machine learning models.",
          image: "/9.jpeg",
          url: "/tensorflow"
        },
        {
          title: "PyTorch",
          description: "See how PyTorch is enabling flexible and efficient deep learning research.",
          image: "/6.jpeg",
          url: "/pytorch"
        }
      ];
      const tabs = [
        
        "AI Models",
        "AI Tools",
        "Datasets",
        "Analytics",
        "AI Research",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
        "AI Applications",
        "AI in Media",
        "AI in Healthcare",
        "AI in Finance",
        "AI in Sports",
        "AI in Retail",
        "Software Development",
      ];
      
      const sliderContents = [
        {
          title: "OpenAI GPT-4",
          description: "Explore how GPT-4 advances natural language processing with state-of-the-art text generation.",
          image: "/4.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "Google BERT",
          description: "Discover BERT's impact on understanding context and improving search engine performance.",
          image: "/2.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "IBM Watson",
          description: "Learn how IBM Watson is transforming business analytics and cognitive computing.",
          image: "/10.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "DeepMind AlphaFold",
          description: "Understand how AlphaFold is revolutionizing protein structure prediction and biological research.",
          image: "/4.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "Microsoft Azure AI",
          description: "See how Azure AI tools enable scalable machine learning and intelligent solutions in the cloud.",
          image: "/5.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "Amazon SageMaker",
          description: "Explore SageMaker's comprehensive suite for building, training, and deploying machine learning models.",
          image: "/6.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "Hugging Face Transformers",
          description: "Learn about the Transformers library and its role in advancing natural language understanding.",
          image: "/7.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "OpenCV",
          description: "Discover OpenCV’s capabilities for computer vision and image processing applications.",
          image: "/8.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "TensorFlow",
          description: "Understand TensorFlow’s role in developing and training deep learning models for various applications.",
          image: "/9.jpeg", // Image URL aligned with the original setup
        },
        {
          title: "PyTorch",
          description: "See how PyTorch supports flexible and efficient deep learning research and model development.",
          image: "/10.jpeg", // Image URL aligned with the original setup
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
      <HeroSlider
        sliderContent={sliderContent}
        darkMode={darkMode}
      ></HeroSlider>
      <SlidingTabs tabs={tabs} darkMode={darkMode}></SlidingTabs>
      <CustomSlider sliderContent={sliderContents} darkMode={darkMode}></CustomSlider>
      <CardSlider darkMode={darkMode}/>
      <CardCategory CardsliderContent={CardsliderContent} mainTitle="Best AI Model" />
    </div>
  );
}

export default AITools;
