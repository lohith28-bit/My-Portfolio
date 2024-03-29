import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import  e1 from "./../../img/express.png";


const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            About me
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>who I am
                </h3>
                <h4>My name is Lohith V P and I am a web developer.
                </h4>
                <p>I have been working on web designing and web development for 7 months. I have always been passionate about learning new skills and trying to improve myself every day as a developer.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>Age:{" "}
                            </span>
                             22
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                Movies, Cricket and Programming
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> lohithvp18@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>From:{" "}
                            </span>
                            Udupi, Karnataka
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">Download CV
                    </a>
                    {/* <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div> */}
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="Tailwindcss" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                        <h5>Tailwindcss</h5>
                    </div>
                    {/* <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                        <h5>jQuery</h5>
                    </div> */}
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    {/* <div>
                        <img alt="Typescript" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <h5>Typescript</h5>
                    </div> */}
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src={e1} />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                    {/* <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma" />
                        <h5>Figma</h5>
                    </div> */}
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"/>
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="java" className="icons-skils" src="https://www.vectorlogo.zone/logos/java/java-icon.svg" />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="python" className="icons-skils" src="https://www.vectorlogo.zone/logos/python/python-icon.svg"/>
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="c++" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />
                        <h5>C++</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);