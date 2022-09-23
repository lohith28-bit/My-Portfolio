import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */

/* Img */
import imgabout from '../../img/mydp.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
              Download CV
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
              Hi, I'm Lohith V P, a final year student of B.E in Electronic and Communication Engineering from SMVITM, Udupi with a CGPA of 8.43. I am a self-taught programmer and Web developer. I have been learning all my web development topics through youtube alongside my college curriculum and Starting with HTML and CSS, I got great interest in Web development, which made me go further and learn MERN stack development.
              </p>

              <div className="hide parrafo-active">
                <p>I consider myself a self-taught person since I like to constantly learn day by day, both new technologies and new development methods that help me polish and raise my level of learning.
                </p>

                <p>
                Along with Web development, I have a great interest in solving coding problems in online coding platfrom. I use Java to solve programs. With this, I got the chance to learn new Algorithms and new logic to solve the particular program and make myself better at solving problems.
                <p>
                  Comming to my ECE background, I have done few hardware project, such as,</p>
                  <ul>
                  <li>
                  {"  "}
                  "Smart gas sensor", is an IOT project which sends a message to the owner whenever the leakage of gas reaches a certain threshold.
                  </li>
                  <li>
                  "Mobile controlled toy car", with this project I got to know insight into working of MicroController.
                  </li>
                </ul>
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;