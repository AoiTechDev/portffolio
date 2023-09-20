import Link from "next/link";
import React from "react";
import '@styles/buttons/contact/button.sass';
const ContactButton = () => {
  return (
    <div className="contact-button">
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
  );
};
export default ContactButton;
