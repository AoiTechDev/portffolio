"use client";
import React from "react";
import "@styles/contact.sass";
import { CustomIcon } from "@components/images/icons/Icons";
import email_svg from "@assets/icons/email.svg";
import InputForm from "@components/contact/InputForm";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import TextareaForm from "@components/contact/TextareaForm";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="left-contact">
          <h2>Contact me!</h2>
          <CustomIcon src={email_svg} className="contact-icon" />
        </div>
        <div className="right-contact">
          <InputForm label="Name" type="text"/>
          <InputForm label="Email" type="email"/>
          {/* <Textarea /> */}
        <TextareaForm/>
        </div>
      </div>
    </section>
  );
};
export default Contact;
