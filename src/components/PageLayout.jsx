import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomePage from "../Pages/HomePage"; // Import your page components
import Setting from "../Pages/Setting";
import ToolPage from "../Pages/ToolPage";
// import AIModelsPage from "./AIModelsPage"; // Import your page components
// Add other page imports here

function PageLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Initialize dark mode state based on system preference or saved preference
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  // Update dark mode setting on theme change
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="flex flex-col h-screen">
      {/* Full-width Header */}
      <Header
        darkMode={darkMode}
        onMenuClick={handleDrawerToggle}
        onToggleSidebar={toggleSidebar}
      />

      <div className="flex flex-grow overflow-hidden ">
        {!isMobile && (
          <Sidebar
            darkMode={darkMode}
            className="ml-2"
            isCollapsed={isSidebarCollapsed}
            onToggleSidebar={toggleSidebar}
          />
        )}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={isMobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: "bg-gray-800 text-white ml-0" }}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar
              darkMode={darkMode}
              isCollapsed={false}
              onToggleSidebar={handleDrawerToggle}
            />
          </Drawer>
        )}
        <div
          className={`flex-grow w-screen flex flex-col overflow-y-auto overflow-x-hidden ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/tool/*" element={<ToolPage darkMode={darkMode} />} />
            <Route
              path="/settings"
              element={
                <Setting darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            {/* <Route path="/ai-models" element={<AIModelsPage />} />
                <Route path="/datasets" element={<DatasetsPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} /> */}
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
