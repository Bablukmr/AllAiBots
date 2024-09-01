import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MemoryIcon from "@mui/icons-material/Memory";
import DataObjectIcon from "@mui/icons-material/DataObject";
import InsightsIcon from "@mui/icons-material/Insights";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar({ isCollapsed, onToggleSidebar, darkMode }) {
  const navigate = useNavigate();
  const location = useLocation();

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
      className={`flex flex-col items-start h-full p-4 overflow-y-auto transition-all duration-300 ease-in-out sidebar-scrollbar ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } ${isCollapsed ? "w-[85px]" : "w-[224px]"}`}
    >
      <ul className="space-y-3">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <li
              key={index}
              onClick={() => navigate(item.to)}
              className={`flex items-center space-x-3 p-2 rounded-lg hover:text-white cursor-pointer transform transition-all duration-300 ease-in-out ${
                isActive ? "bg-gray-700 scale-105 shadow-lg" : "hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
              }`}
            >
              <span
                className={`text-xl transform transition-transform duration-500 ${
                  isActive ? "scale-125 text-indigo-500" : "hover:scale-110 hover:text-indigo-400"
                }`}
              >
                {item.icon}
              </span>
              {!isCollapsed && (
                <span
                  className={`text-base font-normal transition-opacity duration-300 ${
                    isActive ? "font-semibold text-white" : ""
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
