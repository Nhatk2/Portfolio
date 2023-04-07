import React, { useContext} from "react";
import "./About.css";
import { themeContext } from "../../Context";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import {Link} from 'react-scroll'
import { motion } from "framer-motion";
import img__about from '../../img/13.png';

const About = () => {
  // context
  const transition = {
    duration: 2,
    type: "spring",
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // transition

  return (
    <div className="about" id="about">

      {/* left side */}
      <div className="w-left">   
      { <motion.div
          initial={{right: "80%",top:"-20%"}}
          whileInView={{ right: "0%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={img__about}/>
        </motion.div>}
      </div>
      <div className="w-right">
        <div className="awesome__about">
            {/* dark Mode */}
            <span style={{ color: darkMode ? "white" : "" }}>
            </span> 
            <span className="about__me">
              About Me
            </span>
            <spane className="awesome__spane">
              I'm <span className="awesome__name">Huy Nhat</span>, Fronted Developer
            </spane>
              <p style={{ color: darkMode ? "white" : "" }}>
              I'm a new frontend developer with a passion for designing user interfaces using React. 
              I have a strong understanding of HTML, CSS, and JavaScript and I'm able to optimize websites for better user experiences. 
              I have the ability to work independently or as part of a team to complete projects. 
              I keep up to date with the latest front-end trends and believe that I will continue to develop my skills with React.
              </p>
            <Link to="contact" smooth={true} spy={true}>
            <button className="button-about" style={{ background: darkMode ? "white" : "",color: darkMode ? "black" : "white" }}>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
            <span className="send">Send Me</span>
            </button>
            </Link>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
    </div>
  );
};

export default About;
