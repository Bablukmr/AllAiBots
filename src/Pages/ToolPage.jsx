import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ToolPage({ darkMode }) {
  const [rating, setRating] = useState(4.3);
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
        // style={{ position: "fixed", top: "0", height: "100%", overflow: "auto" }}
      >
        <div className="flex flex-col items-center">
          <img
            src="/1.jpeg"
            alt="App Logo"
            className="w-[200px] h-[200px] mb-4"
          />
          <h1 className="text-xl font-semibold mb-2">
          AI Automation
          </h1>
          <p className="text-gray-600 text-sm mb-4">Pango Inc.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
            Get
          </button>
          <p className="text-gray-400 text-xs mt-2">Offers in-app purchases</p>
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
              <div className="w-1/2 p-2">
                <img src="/4.jpeg" alt="Preview" className="rounded-lg" />
              </div>
              <div className="w-1/2 p-2">
                <img src="/8.jpeg" alt="Preview" className="rounded-lg" />
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700 text-sm">
              Hotspot Shield is the fastest VPN with unlimited secure internet
              access for browsing, gaming, and enjoying video content! Whether
              you are at home or on the go, you can stay safe online with
              lightning-fast, secure & private internet security.
            </p>
            <br></br>
            <p className="text-gray-700 text-sm">
              Hotspot Shield is the fastest VPN with unlimited secure internet
              access for browsing, gaming, and enjoying video content! Whether
              you are at home or on the go, you can stay safe online with
              lightning-fast, secure & private internet security.
            </p>
          </div>

          {/* Ratings and Reviews */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Ratings and Reviews</h2>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">{rating}</span>
              <span className="ml-2 text-gray-500">Average</span>
              <span className="ml-2 text-gray-400">22K Ratings</span>
            </div>
            <div className="flex flex-col">
              {/* Example Review */}
              <div className="flex mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-semibold">User Name</p>
                  <p className="text-sm text-gray-500">
                    Review text goes here. This VPN is great for accessing
                    blocked websites and playing banned games.
                  </p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <label key={index}>
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
              {/* Add more reviews here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolPage;
