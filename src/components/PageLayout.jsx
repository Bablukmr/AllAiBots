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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for larger screens */}
      {!isMobile && (
        <Sidebar isCollapsed={isSidebarCollapsed} onToggleSidebar={toggleSidebar} />
      )}

      {/* Drawer for mobile screens */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={isMobileOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: 'bg-gray-800 text-white w-64' }}
          ModalProps={{ keepMounted: true }}
        >
          <Sidebar isCollapsed={false} onToggleSidebar={handleDrawerToggle} />
        </Drawer>
      )}

      <div className="flex-grow flex flex-col">
        <Header onMenuClick={handleDrawerToggle} onToggleSidebar={toggleSidebar} />
        {/* Page Content */}
        <div className="p-4 bg-gray-100 dark:bg-gray-900 flex-grow">
          {/* Add your page content here */}
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
