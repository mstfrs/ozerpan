import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header her sayfada sabit olacak */}
      {/* <Navbar /> */}

      {/* Değişen sayfa içeriği burada gösterilecek */}
      <main><Outlet /></main>
    </div>
  );
};

export default Layout;
