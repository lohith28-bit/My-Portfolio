/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './ProjectPage.css';

/* Modal */

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */

/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            Projects
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              websites
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a href='https://github.com/lohith28-bit/NewsApp.git' target="__blank">
              <img src={proyectsImg(`./NewsApp.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a src="" >
              <img src={proyectsImg(`./BloodBank.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href='https://github.com/lohith28-bit/WeatherApp.git' target="__blank">
              <img src={proyectsImg(`./Weather App.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href='https://modern-ui-landingpage1.netlify.app/' target="__blank">
              <img src={proyectsImg(`./modern UI landing page.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href = "https://lohith28-bit.github.io/JavaScript-Games/" target="__blank">
              <img src={proyectsImg(`./Games.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href='https://hexacode-converter.netlify.app/' target="__blank">
              <img src={proyectsImg(`./color_Hex.png`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
export default Project;