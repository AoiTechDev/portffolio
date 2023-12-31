"use client";
import React, { useState } from "react";
import "@styles/contact.sass";
import InputForm from "@components/contact/InputForm";
import TextareaForm from "@components/contact/TextareaForm";
import { Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { sendContactForm } from "@lib/api";
import Title from "@components/reusable/title/Title";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const initValues = { name: "", email: "", message: "" };
const initState = { values: initValues };

const Contact = () => {
  const [input, setInput] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading } = input;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setInput((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setInput((prev) => ({ ...prev, isLoading: true }));
    await sendContactForm(values);
  };
  return (
    <section id="contact">
      
      <div className="contact-wrapper">
        <div className="left-contact"> 
        <div className="contact-header">
         <h2>Get In Touch</h2>
         <p>pawel.bornikowski@gmail.com</p>
        
        </div>
      </div>
        <div className="right-contact">
          <InputForm
            label="Name"
            type="text"
            handleChange={handleChange}
            value={values.name}
            name="name"
            touched={touched.name}
            onBlur={onBlur}
          />
          <InputForm
            label="Email"
            type="email"
            handleChange={handleChange}
            value={values.email}
            name="email"
            onBlur={onBlur}
            touched={touched.email}
          />
    
          <TextareaForm
            handleChange={handleChange}
            value={values.message}
            name="message"
            onBlur={onBlur}
            touched={touched.message}
          />
          <Button
            leftIcon={<EmailIcon />}
            colorScheme="teal"
            variant="outline"
            isDisabled={!values.name || !values.email || !values.message}
            onClick={onSubmit}
            isLoading={isLoading}
          >
            Send
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
