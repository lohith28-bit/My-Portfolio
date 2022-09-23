import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';
 
const {number, username} = process.env;

const whatsappLink = `https://api.whatsapp.com/send?phone=${number}`;
const telegramLink = `https://t.me/${username}`;
/* Multi idioma */

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            
                <p data-aos="fade-up" data-aos-delay="600"> Hello
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800"> I am Lohith V P
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">MERN stack developer
                </p>

                <div className="redes-sociales" >
                    <a href="https://www.linkedin.com/in/lohithvp/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/lohith28-bit/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-github"></i></a>
                    <a href={telegramLink} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fab fa-telegram"></i></a>
                    <a href= {whatsappLink} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="fab fa-whatsapp"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/lohithvp/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/lohith28-bit/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href={telegramLink} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fa-telegram"></i>
                        </div>
                        <span>Telegram</span>
                    </a>
                    <a className="button" href={whatsappLink} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;