"use client";
import "@styles/menu/menu.sass";
import "@styles/menu/nav/nav.scss";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { CustomEase } from "gsap/dist/CustomEase";

const Menu = ({ open, menuOpenHandler }) => {
  const menuRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true });
    gsap.registerPlugin(CustomEase);
    const ease = "none";
    const easeBg = "power3.out";
    let mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      tl.to(".nav-container", {
        bottom: 0,
        ease: easeBg,
        duration: 0.3,
      })
        .to(".menu-left", {
          left: 0,
          ease: easeBg,

          duration: 0.2,
        })
        .to(".menu-right .menu-right-up", {
          right: 0,
          ease: easeBg,

          duration: 0.2,
        })
        .to(".menu-right .menu-right-down", {
          right: 0,
          ease: easeBg,

          duration: 0.2,
        })
        .to(".menu-close-container", {
          top: "80%",
          ease: "none",
          duration: 0.4,
        })
        .to(
          ".menu-close-container .menu-close",
          {
            y: -100,
            ease: ease,
            duration: 0.4,
          },
          "-=0.3"
        )
        .fromTo(
          ".menu-close-container .menu-close",
          { scale: 0, opacity: 0 },
          {
            scale: 1.3,
            opacity: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          }
        )
        .staggerFrom(
          ".menu > div",
          0.6,
          { x: -100, opacity: 0, ease: "power1.InOut" },
          "0.1",
          "<"
        );
    });
    mm.add("(max-width: 900px)", () => {
      tl.to(".nav-container", {
        bottom: 0,
        ease: easeBg,
        duration: 0.2,
      })
        .to(".menu-left", {
          left: 0,
          ease: easeBg,

          duration: 0.2,
        })
        .to(".menu-close-container", {
          top: "100%",
          ease: "none",
          duration: 0.4,
        })
        .to(
          ".menu-close-container .menu-close",
          {
            y: -100,
            ease: ease,
            duration: 0.4,
          },
          "-=0.3"
        )
        .fromTo(
          ".menu-close-container .menu-close",
          { scale: 0, opacity: 0 },
          {
            scale: 1.3,
            opacity: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          }
        )
        .staggerFrom(
          ".menu > div",
          0.6,
          { x: -100, opacity: 0, ease: "power1.InOut" },
          "0.1",
          "<"
        );
    });

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

    const menuItems = document.querySelectorAll(".menu_item-link");
    menuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        tl.reversed(!tl.reversed());
      });
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
              About
              <span className="mask">
                <span>About</span>
              </span>
              <span className="mask">
                <span>About</span>
              </span>
            </Link>
          </div>
          <div class="menu_item">
            <Link class="menu_item-link" href="/About">
              Skills
              <span className="mask">
                <span>Skills</span>
              </span>
              <span className="mask">
                <span>Skills</span>
              </span>
            </Link>
          </div>
          <div class="menu_item">
            <Link class="menu_item-link" href="/About">
              Projects
              <span className="mask">
                <span>Projects</span>
              </span>
              <span className="mask">
                <span>Projects</span>
              </span>
            </Link>
          </div>
          <div class="menu_item">
            <Link class="menu_item-link" href="/About">
              Contact
              <span className="mask">
                <span>Contact</span>
              </span>
              <span className="mask">
                <span>Contact</span>
              </span>
            </Link>
          </div>
          {/* <div class="menu_item">
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
          </div> */}
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
