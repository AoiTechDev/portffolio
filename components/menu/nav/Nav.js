import Link from "next/link";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
export const Nav = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true });
    gsap.registerPlugin(CustomEase);
    const ease = "none";
    const easeBg = "power1.out";
    let mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      tl.to(".nav-container", {
        top: 0,
        ease: "power1.in",
        duration: 0.3,
      })
        .to(".menu-left", {
          left: 0,
          ease: easeBg,

          duration: 0.2,
        })

        .to(".menu-close-container", {
          top: "80%",
          ease: "none",
          duration: 0.3,
        })
        .staggerFrom(
          ".menu > div",
          0.4,
          { y: 50, opacity: 0, ease: "power1.InOut" },
          "0.1",
          "<"
        )

        .fromTo(
          ".menu-contact-container h4",

          { y: 0, opacity: 0 },
          { y: -50, opacity: 1, ease: "power1.InOut" },
          "-=0.5"
        )
        .fromTo(
          ".menu-contact-container div",

          { y: 0, opacity: 0 },
          { y: -50, opacity: 1, ease: "power1.InOut" },
          "-=0.5"
        )
        .staggerFrom(
          ".menu-socials-wrapper > div",
          0.4,
          { y: 100, opacity: 0, ease: "power1.InOut" },
          "0.2",
          "-=0.5"
        )
        .to(
          ".menu-close-container .menu-close",
          {
            y: -100,
            ease: ease,
            duration: 0.3,
          },
          "-=0.2"
        )

        .fromTo(
          ".menu-close-container .menu-close",
          { scale: 0, opacity: 0 },
          {
            scale: 1.3,
            opacity: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.3)",
          }
        );
    });

    mm.add("(max-width: 900px)", () => {
      tl.to(".nav-container", {
        top: 0,
        ease: "power1.in",
        duration: 0.3,
      })
        .to(".menu-left", {
          top: 0,
          ease: easeBg,

          duration: 0.2,
        })

        .to(".menu-close-container", {
          top: "100%",
          ease: "none",
          duration: 0.3,
        })
        .staggerFrom(
          ".menu > div",
          0.4,
          { y: 50, opacity: 0, ease: "power1.InOut" },
          "0.1",
          "<"
        )
        .to(
          ".menu-close-container .menu-close",
          {
            y: -100,
            ease: ease,
            duration: 0.3,
          },
          "-=0.2"
        )

        .fromTo(
          ".menu-close-container .menu-close",
          { scale: 0, opacity: 0 },
          {
            scale: 1.3,
            opacity: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.3)",
          }
        );
    });

    tl.reverse();
    const open = document.querySelector(".menu-open");
    open.addEventListener("click", (e) => {
      document.body.style.overflow = "hidden";
      tl.reversed(!tl.reversed());
    });
    const close = document.querySelector(".menu-close");
    close.addEventListener("click", (e) => {
      document.body.style.overflow = "unset";
      tl.reversed(!tl.reversed());
    });

    const menuItems = document.querySelectorAll(".menu_item-link");
    menuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        document.body.style.overflow = "unset";
        tl.reversed(!tl.reversed());
      });
    });
  });

  return (
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
          <Link class="menu_item-link" href="/Skills">
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
          <Link class="menu_item-link" href="/Projects">
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
          <Link class="menu_item-link" href="/Contact">
            Contact
            <span className="mask">
              <span>Contact</span>
            </span>
            <span className="mask">
              <span>Contact</span>
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
