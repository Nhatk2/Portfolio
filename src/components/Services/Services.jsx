import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import devLogo from "../../img/dev-logo.png"
import desLogo from "../../img/design-logo.png"
import UiUxLogo from "../../img/Ui-Ux__logo.png"


import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="my-awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : ""}} className="flex-rb">My Awesome</span>
        <span>Services</span>
        <spane style={{ color: darkMode ? "white" : "" }}>
        I am a frontend developer specializing in React with experience in HTML, CSS, and JavaScript.
        I have the ability to work independently or in a team, and always prioritize optimizing user experience and page load speed.
        </spane>
        <a href={Resume} download>
         <button className="button-services" style={{ background: darkMode ? "white" : "",color: darkMode ? "black" : "white" }}>
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
         <span>Download My CV</span>
          </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "35rem" }}
          transition={transition}
        >
          <Card
            emoji={desLogo}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-5rem", top: "12rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={devLogo}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Tailwindcss,GitHub"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "20rem" }}
          whileInView={{ left: "50rem" }}
          transition={transition}
        >
          <Card
            emoji={UiUxLogo}
            heading={"UI/UX"}
            detail={
              "I'm a UI/UX designer with a focus on optimizing user experiences, constantly keeping up with the latest design trends."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
