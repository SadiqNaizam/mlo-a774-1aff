import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Renders the application's main sidebar.
 * This component acts as a structural container, defining the fixed width for the sidebar area
 * as specified in the layout requirements. It renders the `SidebarNav` component which contains
 * the actual navigation links and logic.
 */
const Sidebar: React.FC = () => {
  // The SidebarNav component handles all internal content, styling (including background and text colors),
  // and takes up the full height of its container. This wrapper's main job is to enforce the
  // w-64 (16rem / 256px) width constraint required by the main application grid layout.
  return (
    <aside className="w-64 h-full">
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
