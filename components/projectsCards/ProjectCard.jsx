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
      <Image src={img} className="card-image" />
      <h2>{title}</h2>
    </div>
  );
};
export default ProjectCard;
