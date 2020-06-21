import React from "react";
import "./about.scss";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="wrapper">
                    <div className="card info">
                        <div className="me">Kim taenam</div>
                        <div className="occupation">Front-End Developer</div>
                        <div className="details">
                            <div className="container">
                                <p>cjb940103@gmail.com</p>
                                <p>010-7379-1902</p>
                                <p>Guro-gu, Seoul</p>
                                <a
                                    href="https://github.com/dev-93"
                                    target="_blank"
                                >
                                    https://github.com/dev-93
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card skill">
                        <div className="container">
                            <figure>
                                <img
                                    src={require("../img/css.png")}
                                    alt="css"
                                />
                            </figure>
                            <figure>
                                <img
                                    src={require("../img/html.png")}
                                    alt="html"
                                />
                            </figure>
                            <figure>
                                <img
                                    src={require("../img/javascript.png")}
                                    alt="js"
                                />
                            </figure>
                        </div>
                        <div className="container">
                            <figure>
                                <img
                                    src={require("../img/react.png")}
                                    alt="react"
                                />
                            </figure>
                            <figure>
                                <img
                                    src={require("../img/git.png")}
                                    alt="git"
                                />
                            </figure>
                            <figure>
                                <img
                                    src={require("../img/github.png")}
                                    alt="github"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
