import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ButtonComponents from "./ButtonComponets";
import DarkButtonSwich from "./DarkButton";
import { useNavigate } from "react-router-dom";

function Header({ onMenuClick, onToggleSidebar, darkMode, setDarkMode }) {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        darkMode
          ? "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white animated-gradient-dark"
          : "bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-gray-800 animated-gradient-light"
      } px-4 py-1`}
    >
      <Toolbar className="flex justify-between items-center">
        {/* Left Section - Menu Icon and Title */}
        <div className="flex items-center space-x-4">
          {/* Mobile view menu icon */}
          <div className="block lg:hidden">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
          </div>
          {/* Desktop view sidebar toggle icon */}
          <div className="hidden lg:block">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className="flex items-center justify-center ">
      {/* Logo Text */}
      <div className="flex text-xl md:text-2xl font-bold">
        {/* ALL */}
        <span className="text-[#339AF0]">A</span>
        <span className="text-[#339AF0]">L</span>
        <span className="text-[#339AF0]">L</span>

        {/* AI */}
        <span className="text-[#C0392B] mx-1 md:mx-2">A</span>
        <span className="text-[#C0392B]">I</span>

        {/* BOTS */}
        <span className="text-[#28B463] mx-1 md:mx-2">B</span>
        <span className="text-[#28B463]">O</span>
        <span className="text-[#28B463]">T</span>
        <span className="text-[#28B463]">S</span>
      </div>
    </div>
        </div>

        {/* Middle Section - Search Bar */}
        <div className="flex-grow lg:max-w-lg mx-4">
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon
                className={`h-5 w-5 ${
                  darkMode ? "text-white" : "text-gray-500"
                }`}
              />
            </div>
            <InputBase
              placeholder="Search your AI"
              className={`w-full pl-9 lg:pl-10 pr-3 py-2 rounded-full border-none shadow-sm focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-700 text-white placeholder:text-gray-400"
                  : "bg-gray-100 text-gray-800 placeholder:text-gray-600"
              }`}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>

        {/* Right Section - Buttons and Switch */}
        <div className="flex items-center space-x-4">
          {/* Smaller Button for Mobile */}
          <div onClick={() => navigate("/contact")} className="hidden lg:block">
            <ButtonComponents darkMode={darkMode} />
          </div>
          {/* Dark Mode Toggle Button */}
          <DarkButtonSwich darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </Toolbar>
    </div>
  );
}

export default Header;
