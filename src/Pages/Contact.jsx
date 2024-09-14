import React, { useState } from "react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    websiteType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`mt-4 flex flex-col rounded-lg p-4 shadow-sm transition-all mx-[2%] md:mx-[10%] duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <h2 className="font-bold text-lg">Proposal Form</h2>

      <div className="mt-4">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Your name"
          className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
          value={formData.name}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          placeholder="Your address"
          className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4 flex flex-row space-x-2">
        <div className="flex-1">
          <label htmlFor="city">City</label>
          <input
            name="city"
            placeholder="Your city"
            className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            value={formData.city}
            onChange={handleChange}
            type="text"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="state">State</label>
          <input
            name="state"
            placeholder="Your state"
            className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            value={formData.state}
            onChange={handleChange}
            type="text"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-row space-x-2">
        <div className="flex-1">
          <label htmlFor="zip">ZIP</label>
          <input
            name="zip"
            placeholder="Your ZIP code"
            className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            value={formData.zip}
            onChange={handleChange}
            type="text"
          />
        </div>
      </div>

      {/* Dropdown for website types */}
      <div className="mt-4">
        <label htmlFor="websiteType">Website Type</label>
        <select
          name="websiteType"
          className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
          value={formData.websiteType}
          onChange={handleChange}
        >
          <option value="">Select website type</option>
          <option value="ecommerce">E-Commerce Website</option>
          <option value="portfolio">Portfolio Website</option>
          <option value="blog">Blog Website</option>
          <option value="business">Business Website</option>
          <option value="educational">Educational Website</option>
          <option value="social">Social Media Website</option>
          <option value="news">News Website</option>
          <option value="nonprofit">Nonprofit Website</option>
          <option value="personal">Personal Website</option>
          <option value="forum">Forum Website</option>
        </select>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          className={`rounded-md px-4 py-2 font-bold transition-all duration-300 ${
            darkMode
              ? "bg-white text-black hover:bg-blue-500 hover:text-white"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
