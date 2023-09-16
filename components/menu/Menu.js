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

      duration: 0.3,
    })
      .to(".menu-left", {
        left: 0,
        ease: "power1.InOut",

        duration: 0.3,
      })
      .to(".menu-right .menu-right-up", {
        right: 0,
        ease: "power1.InOut",

        duration: 0.3,
      })
      .to(".menu-right .menu-right-down", {
        right: 0,
        ease: "power1.InOut",

        duration: 0.3,
      })
      .to(".menu-close-container", {
        top: "80%",
        ease: "power1.InOut",
        duration: 0.4,
      })
      .to(".menu-close-container .menu-line", {
        height: 400,
        ease: "power1.InOut",
        duration: 0.4,
      })
      .to(".menu-close-container .menu-close", {
        y: -100,
        ease: "power1.InOut",
        duration: 0.4,
      })
      .staggerFrom(
        ".menu > div",
        0.8,
        { y: 100, opacity: 0, ease: "power1.InOut" },
        "0.1",
        "-=0.4"
      );

    // .staggerFrom(
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
      <div className="menu-close-container">
        <div class="menu-close">
          <span></span>
          <span></span>
        </div>
        <span className="menu-line"></span>
      </div>

      <div className="menu-left">
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

      <div className="menu-right">
        <div className="menu-right-up"></div>
        <div className="menu-right-down"></div>
      </div>
    </div>
  );
};

export default Menu;
