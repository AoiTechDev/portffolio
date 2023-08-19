"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import "@styles/about.sass";
import Image from "next/image";

const ProjectCard = ({ title, img }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });

  return (
    <div className="slide s-st">
      <h2 className={inView ? "card-title scroll-right" : "card-title"} ref={ref}>{title}</h2>
      <p>Click here to get more informations!</p>
    </div>
  );
};
export default ProjectCard;
