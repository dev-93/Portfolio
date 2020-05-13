import React from 'react';
import "./about.scss"

const About = () => {
  return (
    <>
      <div className="about">
        <div className="wrapper">
          <div className="card info">
            <div className="me">Great Partner</div>
            <div className="occupation">Front-End Developer</div>
            <div className="details">
              <div className="container">
                <p>cjb940103@gmail.com</p>
                <p>010-7379-1902</p>
                <p>Guro-gu, Seoul</p>
                <a href="https://github.com/dev-93" target="_blank">https://github.com/dev-93</a>
              </div>
            </div>
          </div>
      
          <div className="card skill">
            <div>html / css</div>
            <div>Javascript / React / Jquery</div>
            <div>TypeScript</div>
            <div>Git / GitHub</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
