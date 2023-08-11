'use client'
//import "@styles/globals.css";
import "@styles/styles.sass"
import Nav from "@components/Nav";
import Menu from "@components/menu/Menu";
import React, {useState} from 'react';
const RootLayout = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenuHandler = () =>{
    setIsMenuOpen(prev => !prev)
  }
  return (
    <html>
        <body >
            <main className="app">
                <Nav openMenuHandler={openMenuHandler}/>
                {isMenuOpen && <Menu/>}
               {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;