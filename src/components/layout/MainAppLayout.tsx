import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * The main application layout component.
 * It establishes the primary visual structure of the application using a CSS grid,
 * consisting of a fixed-width sidebar, a fixed-height header, and a scrollable main content area.
 * This component follows the HLSB (Header, Left Sidebar, Body) pattern.
 *
 * @param {MainAppLayoutProps} props The props for the component.
 * @param {React.ReactNode} props.children The page content to be rendered in the main area.
 * @returns {JSX.Element} The rendered MainAppLayout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background">
      {/* Sidebar: Occupies the first column and spans both rows. Its width is determined by the Sidebar component itself. */}
      <div className="row-span-2 border-r border-border">
        <Sidebar />
      </div>

      {/* Header: Occupies the first row of the second column. Its height is determined by the Header component. */}
      <div className="col-start-2 row-start-1">
        <Header />
      </div>

      {/* Main Content: Occupies the second row of the second column and is made scrollable. */}
      <main className="col-start-2 row-start-2 overflow-y-auto bg-background">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
