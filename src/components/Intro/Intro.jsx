/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import "./Intro.css";
// import { useState, useEffect } from "react";
import img__intro from "../../img/logo-intro.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect'
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //--------------------------
  let words=['Frontend Developer with high level of experience in web designing and development, producting the Quality work']
  return (
    <div className="Intro" id="intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span className="h1" style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span className="h2">Le Huy Nhat</span>
        <Typewriter  style={{ color: darkMode ? "white" : "" }}
        options={{
          strings:words,
          autoStart:true,
          loop:true,
          delay:1000,
          wrapperClassName:'typewriter'
        }}
        />  
        </div>
        <Link to="contact" smooth={true} spy={true}>
        <button className="button-intro" style={{ background: darkMode ? "white" : "",color: darkMode ? "black" : "white" }}>
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
        <span className="center">Send Me</span>
        </button>
        </Link>
        {/* social icons */}
        <div className="i-icons" >
          <a href="https://github.com/Nhatk2" >
             <i class="fa-brands fa-github"style={{ color: darkMode ? "white" : "" }}></i>
          </a>
          <a href="https://www.linkedin.com/in/uri-le-266838242/" >
             <i class="fa-brands fa-linkedin-in"style={{ color: darkMode ? "white" : "" }}></i>
          </a>
          <a href="https://www.facebook.com/nhatle666">
             <i class="fa-brands fa-facebook" style={{ color: darkMode ? "white" : "" }}></i>
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        
        { <motion.div
          initial={{ top: "-10%", left: "84%" }}
          whileInView={{ left: "-8%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={img__intro}/>
        </motion.div>}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
