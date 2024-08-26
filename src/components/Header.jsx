import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

function Header({ onMenuClick, onToggleSidebar }) {
  const darkMode = true;
  return (
    <div
      position="static"
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          {/* Mobile view menu icon */}
          <div className="block md:hidden">
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
          <div className="hidden md:block">
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

        <div className="relative flex items-center w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon
              className={`${darkMode ? "text-white" : "text-gray-800"}`}
            />
          </div>
          <InputBase
            placeholder="Search Your AI"
            className={`w-full pl-10 pr-3 py-2 border rounded-md ${
                darkMode ? "bg-gray-700 text-white placeholder:text-gray-400" : "bg-gray-100 text-gray-800 placeholder:text-gray-600"
              }`}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </div>
  );
}

export default Header;
