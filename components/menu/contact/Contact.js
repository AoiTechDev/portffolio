import ContactButton from "@components/reusable/button/ContactButton";
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
        <ContactButton/>
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
