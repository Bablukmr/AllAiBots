import React, { useState } from "react";
import { jsPDF } from "jspdf";
import emailjs from "emailjs-com";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    websiteType: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    doc.text("Proposal Form", 20, 20);
    doc.text(`Name: ${formData.name}`, 20, 30);
    doc.text(`Address: ${formData.address}`, 20, 40);
    doc.text(`City: ${formData.city}`, 20, 50);
    doc.text(`State: ${formData.state}`, 20, 60);
    doc.text(`ZIP: ${formData.zip}`, 20, 70);
    doc.text(`Country: ${formData.country}`, 20, 80);
    doc.text(`Website Type: ${formData.websiteType}`, 20, 90);
    doc.text(`Mobile: ${formData.mobile}`, 20, 100);
    doc.text(`Email: ${formData.email}`, 20, 110);

    return doc;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Generate the PDF
    const pdfDoc = generatePDF();
    const pdfBase64 = pdfDoc.output("datauristring");

    // Use EmailJS to send email
    const emailParams = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      pdfFile: pdfBase64, // PDF as base64 string
    };

    emailjs
      .send(
        "service_c42uylr", // EmailJS service ID
        "template_hhb2o4i", // EmailJS template ID
        emailParams,
        "your_user_id" // EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send the email.");
        }
      );
  };

  return (
    <div
      className={`mt-4 flex flex-col rounded-lg p-4 shadow-sm transition-all mx-[2%] md:mx-[10%] duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <h2 className="font-bold text-lg">Proposal Form</h2>

      <form onSubmit={sendEmail}>
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
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Your email"
            className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="mobile">Mobile</label>
          <input
            name="mobile"
            placeholder="Your mobile number"
            className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            value={formData.mobile}
            onChange={handleChange}
            type="tel"
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
      </form>
    </div>
  );
};

export default Contact;
