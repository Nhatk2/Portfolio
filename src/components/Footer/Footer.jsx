import React, { useContext } from "react";
import "./Footer.css";
import { themeContext } from "../../Context";

const Footer = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  

  return (
    <div className="footer" id="footer">
         <div  class="ocean" style={{background: darkMode?'#333333': 'white',
              color: darkMode ? "white" : "",
          }}>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
    </div>
  );
};

export default Footer;
