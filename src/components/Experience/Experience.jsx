import React from "react";
import "./Experience.css";
import html from '../../img/html.png';
import css from "../../img/css.png";
import javascript from "../../img/javascript.png";
import reactImage from "../../img/react.png";
import nextjs from "../../img/nextjs.png";
import graphql from "../../img/graphql.png";
import github from "../../img/github.png";
import tailwind from "../../img/tailwind.png";
import { motion } from "framer-motion";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
const Experience = () => {
  const transition = { duration: 2, type: "spring"};
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Bootstrap",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "SQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="experience" >
      <div className="achievement">
        <div className="achievement-div">
          <p className="achievement-p">
            Experience
          </p>
          <p>These are the technologies I've worked with</p>
        </div>
       <div className="achievement-right"> 
          {techs.map(({ id, src, title }) => (
            <div className="achievement-img" key={id} style={{style: techs.style}}>
              <img src={src} alt=""/>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
