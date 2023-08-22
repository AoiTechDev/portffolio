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
      <div className="card_content">
        
        <h5>Click here to get more informations about:</h5>
        <ul className="card-project-info-list">
          <li>Project description</li>
          <li>What i did in project</li>
          <li>Technologies i used</li>
        </ul>
        {/* <p>Project description</p>
        <p>What i did in project</p>
        <p>Technologies i used</p> */}
      </div>
      <div class="blob"></div>
      <div class="blob"></div>
      
      
    </div>
  );
};
export default ProjectCard;
