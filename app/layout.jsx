//import "@styles/globals.css";
import "@styles/styles.sass";
import Nav from "@components/Nav";

import React from "react";
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main className="app">
          <Nav />

          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
