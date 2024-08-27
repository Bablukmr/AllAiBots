import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomePage from "./HomePage"; // Import your page components
// import AIModelsPage from "./AIModelsPage"; // Import your page components
// Add other page imports here

function PageLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:1024px)");

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    // <Router>
      <div className="flex flex-col h-screen">
        {/* Full-width Header */}
        <Header onMenuClick={handleDrawerToggle} onToggleSidebar={toggleSidebar} />

        <div className="flex flex-grow overflow-hidden mt-[1px]">
          {!isMobile && (
            <Sidebar
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
              classes={{ paper: "bg-gray-800 text-white w-64 ml-2" }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar isCollapsed={false} onToggleSidebar={handleDrawerToggle} />
            </Drawer>
          )}

          <div className="flex-grow w-screen flex flex-col bg-gray-100 dark:bg-gray-900">
          
              {/* <Route path="/" element={<HomePage />} /> */}
              {/* <Route path="/ai-models" element={<AIModelsPage />} />
              <Route path="/datasets" element={<DatasetsPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} /> */}
              {/* Add other routes here */}
           
          </div>
        </div>
      </div>
    // </Router>
  );
}

export default PageLayout;
