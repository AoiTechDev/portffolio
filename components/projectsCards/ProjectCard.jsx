"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import "@styles/about.sass";
import Image from "next/image";

const ProjectCard = ({ name, id }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });

  return (
    <div className="slide s-st" id={id}>
      <h2 className={inView ? "card-title scroll-right" : "card-title"} ref={ref}>{name}</h2>
      <p>Click here to get more informations!</p>
    </div>
  );
};
export default ProjectCard;
