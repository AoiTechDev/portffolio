"use client";
//import "@styles/globals.css";
import "@styles/styles.sass";
import Nav from "@components/Nav";

import React, { useState } from "react";
import Menu from "@components/menu/Menu";

const RootLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <html>
      <body>
        <main className="app">
          <Nav menuOpenHandler={menuOpenHandler} />
          {isMenuOpen && <Menu menuOpenHandler={menuOpenHandler} />}
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
