import Logo from "@components/reusable/logo/Logo";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="menu-right">
      <div className="menu-contact-container">
        <h4>
          Looking for a passionate front-end developer?
          <br /> You found him!
        </h4>
        <div className="menu-contact-button">
          <Link href="/Contact">
            {" "}
            <span className="btn__circle"></span>
            <span className="btn__blue-circle">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="icon-arrow-right"
                viewBox="0 0 21 12"
              >
                <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
              </svg>
            </span>
            <span className="btn__text">Get in Touch</span>
          </Link>
        </div>
      </div>
      <div className="menu-socials-wrapper">
        
        <div className="menu-socials">
          <Link href="https://github.com/BorPawel" target="_blank">
            <BsGithub />
          </Link>
        </div>
        <div className="menu-socials">
          <Link
            href="https://www.linkedin.com/in/pbornikowski/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
        </div>
        <div className="menu-socials">
          <Logo />
        </div>
      </div>
    </div>
  );
};
export default Contact;
