import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Renders the application's main header.
 * This component serves as a simple structural wrapper for the `TopHeader` component.
 * The `TopHeader` contains the detailed implementation, including the page title,
 * navigation tabs, and action buttons, as well as its own styling (height, border, background).
 */
const Header: React.FC = () => {
  // The TopHeader component from the context already includes the <header> tag
  // and all necessary styling (h-14, border-b, etc.). This component simply
  // renders it to fit into the main app layout's structure, promoting clean separation.
  return <TopHeader />;
};

export default Header;
