import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ToolPage({ darkMode,toolData }) {
  const [rating, setRating] = useState(toolData.rating);
  const [hover, setHover] = useState(null);

  return (
    <div
      className={`flex relative flex-col lg:flex-row h-full ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left Side - Image and Title */}
      <div
        className={`flex-none absolute top-0 lg:w-1/4 p-4 shadow-md rounded-lg mb-4 lg:mb-0 lg:mr-4 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex flex-col items-center">
          <img
            src={toolData.aiimage}
            alt="App Logo"
            className="w-[200px] h-[200px] mb-4"
          />
          <h1 className="text-xl font-semibold mb-2">{toolData.title}</h1>
          <p className="text-gray-600 text-sm mb-4">Pango Inc.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
            Get
          </button>
          <p className="text-gray-400 text-xs mt-2">Offers in-app purchases</p>
        </div>
        {/* Bottom Right Corner - Ratings Section */}
        <div
          className="mt-2 p-4 bg-gray-900 text-white rounded-lg shadow-md"
          style={{ width: "250px" }}
        >
          <h3 className="text-xl font-semibold mb-2">Ratings and Reviews</h3>
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold">{toolData.rating}</span>
            <span className="ml-2 text-gray-300">{toolData.totalRatings} Ratings</span>
          </div>
          <div>
            {[5, 4, 3, 2, 1].map((stars, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{stars}★</span>
                <div className="w-full bg-gray-600 rounded-full h-2.5">
                  <div
                    className={`h-2.5 bg-orange-500 rounded-full`}
                    style={{
                      width: toolData.ratingDistribution[stars] || "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Content and Reviews */}
      <div
        className={`flex-grow bg-white p-4 shadow-md rounded-lg lg:ml-[25%] ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        style={{ overflowY: "auto", height: "100%" }}
      >
        <div className="flex flex-col">
          {/* Preview and Description */}
          <div className="flex flex-col mb-6">
            <div className="flex mb-4">
              {toolData.images.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img src={image} alt={`Preview ${index + 1}`} className="rounded-lg" />
                </div>
              ))}
            </div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700 text-sm">{toolData.description}</p>
            <br></br>
            <p className="text-gray-700 text-sm">{toolData.description2}</p>
          </div>

          {/* Ratings and Reviews */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Ratings and Reviews</h2>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">{rating}</span>
              <span className="ml-2 text-gray-500">Average</span>
              <span className="ml-2 text-gray-400">{toolData.totalRatings} Ratings</span>
            </div>

            {/* Reviews */}
            {toolData.reviews.map((review, index) => (
              <div key={index} className="flex mb-4 mt-8">
                <div className="w-12 h-12 bg-gray-300 rounded-full">
                  <img src={review.userImage} alt="User" className="w-full h-full rounded-full" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{review.username}</p>
                  <p className="text-sm text-gray-500">{review.reviewText}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            className="hidden"
                            onClick={() => setRating(ratingValue)}
                          />
                          <FaStar
                            className="cursor-pointer"
                            color={
                              ratingValue <= (hover || rating)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            size={20}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolPage;
