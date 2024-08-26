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

function Sidebar({ isCollapsed, onToggleSidebar }) {
  const darkMode = true; // Replace this with actual theme detection logic

  const menuItems = [
    { icon: <PersonIcon />, label: "My Space" },
    { icon: <HomeIcon />, label: "Home" },
    { icon: <MemoryIcon />, label: "AI Models" },
    { icon: <DataObjectIcon />, label: "Datasets" },
    { icon: <InsightsIcon />, label: "Analytics" },
    { icon: <CodeIcon />, label: "AI Tools" },
    { icon: <SchoolIcon />, label: "Learning Resources" },
    { icon: <LiveTvIcon />, label: "AI in Media" },
    { icon: <MovieIcon />, label: "AI Movies" },
    { icon: <SportsSoccerIcon />, label: "AI in Sports" },
    { icon: <CategoryIcon />, label: "Categories" },
  ];

  return (
    <div
      className={`flex flex-col h-full p-4 transition-all duration-300 ease-in-out ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } ${isCollapsed ? "w-[70px]" : "w-64"}`}
    >
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && (
              <span className="text-lg font-medium transition-opacity duration-300">
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
