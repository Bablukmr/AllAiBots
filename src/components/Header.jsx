import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

function Header({ onMenuClick, onToggleSidebar, darkMode }) {
  return (
    <div
      className={`${
        darkMode
          ? "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white animated-gradient-dark"
          : "bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-gray-800 animated-gradient-light"
      } px-4 py-1`}
    >
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
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
          <Typography
            variant="h6"
            component="div"
            className={`ml-4 font-canavar ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            AllAiBots
          </Typography>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center w-full lg:max-w-lg mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon
              className={`h-5 w-5 ${darkMode ? "text-white" : "text-gray-500"}`}
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
      </Toolbar>
    </div>
  );
}

export default Header;
