import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';

function PageLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:1024px)');

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Full-width Header */}
      <Header onMenuClick={handleDrawerToggle} onToggleSidebar={toggleSidebar} />

      <div className="flex flex-grow overflow-hidden mt-[2px]"> {/* Adds 2px of space after the header */}
        {/* Sidebar for larger screens */}
        {!isMobile && (
          <Sidebar
            className="ml-2" // Adds 2px space to the left of the sidebar
            isCollapsed={isSidebarCollapsed}
            onToggleSidebar={toggleSidebar}
          />
        )}

        {/* Drawer for mobile screens */}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={isMobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: 'bg-gray-800 text-white w-64 ml-2' }} // Adds 2px space in the drawer
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar isCollapsed={false} onToggleSidebar={handleDrawerToggle} />
          </Drawer>
        )}

        <div className="flex-grow w-screen flex flex-col">
          {/* Page Content */}
          <div className="p-4 bg-gray-100 dark:bg-gray-900 flex-grow">
            {/* Add your page content here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
