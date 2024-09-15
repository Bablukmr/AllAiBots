import React, { useState } from "react";
import { jsPDF } from "jspdf";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // SweetAlert for notifications

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Simple form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.mobile) formErrors.mobile = "Mobile number is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.state) formErrors.state = "State is required";
    if (!formData.zip) formErrors.zip = "ZIP code is required";
    if (!formData.websiteType)
      formErrors.websiteType = "Website type is required";
    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
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

    // Validate form before sending email
    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all required fields!",
      });
      return;
    }

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
        "template_m30tg2b", // EmailJS template ID
        emailParams,
        "vVnjNAUj9-zKSbtOo" // EmailJS user ID
      )
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Your email has been sent successfully!",
          });
        },
        (err) => {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Failed to send the email. Please try again later.",
          });
        }
      );
  };

  return (
    <div
      className={`mt-4 flex flex-col rounded-lg p-4 shadow-sm transition-all mx-[2%] md:mx-[10%] duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-rose-400 to-red-500"
          : "bg-gradient-to-r from-red-500 to-orange-500"
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
          {errors.name && <p className="text-red-500">{errors.name}</p>}
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
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="mobile">Mobile</label>
          <input
          type="number"
            name="mobile"
            placeholder="Your mobile number"
            className={`w-full rounded-md px-2 py-1 transition-all duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            value={formData.mobile}
            onChange={handleChange}
            type="tel"
          />
          {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
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
          {errors.address && <p className="text-red-500">{errors.address}</p>}
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
            {errors.city && <p className="text-red-500">{errors.city}</p>}
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
            {errors.state && <p className="text-red-500">{errors.state}</p>}
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
            {errors.zip && <p className="text-red-500">{errors.zip}</p>}
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
          {errors.websiteType && (
            <p className="text-red-500">{errors.websiteType}</p>
          )}
        </div>

        <div className="mt-4 flex justify-center">
          <button
           type="submit"
            class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Submit
          </button>

          {/* <button
            className={`rounded-md px-4 py-2 font-bold transition-all duration-300 ${
              darkMode
                ? "bg-white text-black hover:bg-blue-500 hover:text-white"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
            type="submit"
          >
            Submit
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Contact;
