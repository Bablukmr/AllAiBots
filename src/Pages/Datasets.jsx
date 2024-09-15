import React from "react";
import HeroSlider from "../components/HeroSlider";
import CustomSlider from "../components/CardLayout";
import SlidingTabs from "../components/SlidingTabs";
import CardCategory from "../components/CardCategory";
import CardSlider from "../components/EsentialsTool";

function Datasets({ darkMode }) {
    const sliderContent = [
        {
          title: "ImageNet Dataset",
          description: "Explore how ImageNet has shaped the field of computer vision.",
          image: "/10.jpeg",
          url: "/imagenet"
        },
        {
          title: "COCO Dataset",
          description: "Discover COCO's role in object detection and segmentation tasks.",
          image: "/2.jpeg",
          url: "/coco"
        },
        {
          title: "SQuAD Dataset",
          description: "Learn about SQuAD's influence on question-answering systems.",
          image: "/4.jpeg",
          url: "/squad"
        },
        {
          title: "MNIST Dataset",
          description: "Understand how MNIST is pivotal in digit classification research.",
          image: "/6.jpeg",
          url: "/mnist"
        },
        {
          title: "OpenAI GPT-3 Dataset",
          description: "See how the GPT-3 dataset helps power state-of-the-art language models.",
          image: "/9.jpeg",
          url: "/gpt3-dataset"
        },
        {
          title: "Common Crawl Dataset",
          description: "Explore the extensive web data used in various AI models.",
          image: "/7.jpeg",
          url: "/common-crawl"
        },
        {
          title: "CIFAR-10 Dataset",
          description: "Learn about CIFAR-10’s impact on image classification tasks.",
          image: "/2.jpeg",
          url: "/cifar10"
        },
        {
          title: "Kaggle Datasets",
          description: "Discover popular datasets used in Kaggle's machine learning competitions.",
          image: "/1.jpeg",
          url: "/kaggle-datasets"
        },
        {
          title: "LibriSpeech Dataset",
          description: "Understand LibriSpeech’s contribution to speech recognition tasks.",
          image: "/9.jpeg",
          url: "/librispeech"
        },
        {
          title: "UCI Machine Learning Repository",
          description: "Explore UCI's wide collection of datasets for machine learning.",
          image: "/6.jpeg",
          url: "/uci-ml-repository"
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
          title: "ImageNet Dataset",
          description: "Explore ImageNet’s significant role in deep learning and visual object recognition.",
          image: "/4.jpeg",
        },
        {
          title: "COCO Dataset",
          description: "Learn how COCO is used in object detection, segmentation, and keypoint detection.",
          image: "/2.jpeg",
        },
        {
          title: "SQuAD Dataset",
          description: "Understand how SQuAD has transformed the field of natural language processing and Q&A systems.",
          image: "/10.jpeg",
        },
        {
          title: "MNIST Dataset",
          description: "Explore MNIST, a fundamental dataset for digit recognition in machine learning.",
          image: "/4.jpeg",
        },
        {
          title: "OpenAI GPT-3 Dataset",
          description: "Discover the large-scale data powering OpenAI’s GPT-3 language model.",
          image: "/5.jpeg",
        },
        {
          title: "Common Crawl Dataset",
          description: "Understand how Common Crawl serves as a massive resource for web-based AI models.",
          image: "/6.jpeg",
        },
        {
          title: "CIFAR-10 Dataset",
          description: "Learn about the role of CIFAR-10 in advancing image recognition models.",
          image: "/7.jpeg",
        },
        {
          title: "Kaggle Datasets",
          description: "Explore the most popular datasets featured in Kaggle competitions.",
          image: "/8.jpeg",
        },
        {
          title: "LibriSpeech Dataset",
          description: "Discover how LibriSpeech is improving automatic speech recognition tasks.",
          image: "/9.jpeg",
        },
        {
          title: "UCI Machine Learning Repository",
          description: "Explore UCI's curated dataset repository for machine learning research.",
          image: "/10.jpeg",
        },
      ];

    const CardsliderContent = [
        {
          title: "ImageNet",
          description: "Discover how ImageNet has driven advancements in computer vision.",
          image: "/1.jpeg",
          url:"dataset/imagenet"
        },
        {
          title: "COCO",
          description: "COCO’s impact on object detection and instance segmentation.",
          image: "/2.jpeg",
           url:"dataset/coco"
        },
        {
          title: "SQuAD",
          description: "Explore the SQuAD dataset for question-answering tasks.",
          image: "/3.jpeg",
          url:"dataset/squad"
        },
        {
          title: "MNIST",
          description: "Learn about MNIST's fundamental role in digit classification.",
          image: "/4.jpeg",
          url:"dataset/mnist"
        },
        {
          title: "Common Crawl",
          description: "Explore Common Crawl, a vast web dataset for AI research.",
          image: "/5.jpeg",
          url:"dataset/common-crawl"
        },
        {
          title: "UCI Repository",
          description: "Browse datasets from the UCI Machine Learning Repository.",
          image: "/6.jpeg",
          url:"dataset/uci-repository"
        },
        {
          title: "LibriSpeech",
          description: "Discover LibriSpeech for automatic speech recognition.",
          image: "/7.jpeg",
          url:"dataset/librispeech"
        },
        {
          title: "CIFAR-10",
          description: "Learn how CIFAR-10 is applied in image classification research.",
          image: "/8.jpeg",
           url:"dataset/cifar10"
        },
        {
          title: "OpenAI GPT-3 Dataset",
          description: "Explore the dataset behind OpenAI's GPT-3 model.",
          image: "/9.jpeg",
           url:"dataset/gpt3"
        },
        {
          title: "Kaggle Datasets",
          description: "Browse and analyze Kaggle's most popular datasets.",
          image: "/10.jpeg",
           url:"dataset/kaggle"
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
      <CardCategory CardsliderContent={CardsliderContent} mainTitle="Top Datasets" />
    </div>
  );
}

export default Datasets;
