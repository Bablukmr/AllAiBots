import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import MemoryIcon from "@mui/icons-material/Memory";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import DataObjectIcon from "@mui/icons-material/DataObject";
import InsightsIcon from "@mui/icons-material/Insights";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

function Sidebar({ isCollapsed, onToggleSidebar }) {
  const darkMode = true; // Replace this with actual theme detection logic
  const navigate = useNavigate();
  const menuItems = [
    { icon: <HomeIcon />, label: "Home", to: "/" },
    { icon: <MemoryIcon />, label: "AI Models", to: "/ai-models" },
    { icon: <DataObjectIcon />, label: "Datasets", to: "/datasets" },
    { icon: <InsightsIcon />, label: "Analytics", to: "/analytics" },
    { icon: <CodeIcon />, label: "AI Tools", to: "/ai-tools" },
    { icon: <SchoolIcon />, label: "AI Learning", to: "/ai-learning" },
    { icon: <LiveTvIcon />, label: "AI in Media", to: "/ai-media" },
    { icon: <MovieIcon />, label: "AI Movies", to: "/ai-movies" },
    { icon: <SportsSoccerIcon />, label: "AI in Sports", to: "/ai-sports" },
    { icon: <CategoryIcon />, label: "Categories", to: "/categories" },
    { icon: <SettingsIcon />, label: "Setting", to: "/settings" },
  ];

  return (
    <div
      className={`flex flex-col h-full p-4 transition-all duration-300 ease-in-out ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } ${isCollapsed ? "w-[70px]" : "w-56"}`}
    >
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li
            onClick={()=>navigate(item.to)}
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && (
              <span className="text-base font-normal transition-opacity duration-300">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
