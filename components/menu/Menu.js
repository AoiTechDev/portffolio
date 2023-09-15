import "@styles/menu/menu.sass";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Menu = ({ open, menuOpenHandler }) => {
  const menuRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(".nav-container", {
      bottom: 0,
      ease: "power1.InOut",

      duration: 0.5,
    }).to(".nav-container", {
      opacity: 1,
      ease: "power1.InOut",
      duration: 1,
    });
    
    // tl.staggerFrom(
    //   ".menu > div",
    //   0.8,
    //   { y: 100, opacity: 0, ease: "power1.InOut" },
    //   "0.1",
    //   "-=0.4"
    // );

    // tl.staggerFrom(
    //   ".socials",
    //   0.8,
    //   { y: 100, opacity: 0, ease: "power1.InOut" },
    //   "0.4",
    //   "-=0.6"
    // );

    tl.reverse();
    const open = document.querySelector(".menu-open");
    open.addEventListener("click", (e) => {
      tl.reversed(!tl.reversed());
    });
    const close = document.querySelector(".menu-close");
    close.addEventListener("click", (e) => {
      tl.reversed(!tl.reversed());
    });
  });

  // useEffect(() => {
  //   tl.current.reversed(open);
  // }, [open]);

  return (
    <div class="nav-container">
      <div class="menu-close">close</div>

      <nav class="menu">
        <div class="menu_item">
          <Link class="menu_item-link" href="/About">
            About me
          </Link>
        </div>
        <div class="menu_item">
          <Link class="menu_item-link" href="/Projects">
            Projects
          </Link>
        </div>
        <div class="menu_item">
          <Link class="menu_item-link" href="/Skills">
            Skills
          </Link>
        </div>
        <div class="menu_item">
          <Link class="menu_item-link" href="/Contact">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
