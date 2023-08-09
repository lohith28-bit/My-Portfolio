import React from 'react';
import '../../pages/Contact/ContactPage.css'
/* TypedJs */
import Typical from 'react-typical';
// const {number, username} = process.env;

// const whatsappLink = `https://api.whatsapp.com/send?phone=${number}`;
// const telegramLink = `https://t.me/${username}`;

const Contact = () => (

    <section className="contactos" id="contactos">

        <h2 className="heading">
            Contact
        </h2>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">Contact me by:{" "}
            <Typical
                className="site-contacto"
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Gmail', 1600,
                    'Telegram', 1600,
                    'Linkedin', 1600,
                    'Github', 1600,
                ]}
            />

        </h3>

        <div className="icons">
            <a href="mailto:lohithvp18@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            {/* <a href="https://api.whatsapp.com/send?phone=7022820680" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"></span>
                </div>
                <div className="text">
                    Whatsapp
                </div>
            </a> */}
            <a href="https://t.me/Its_lohith" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-telegram"></span>
                </div>
                <div className="text">
                    telegram
                </div>
            </a>
            <a href="https://www.linkedin.com/in/lohithvp/" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"></span>
                </div>
                <div className="text">
                    Linkedin
                </div>
            </a>
            <a href="https://github.com/lohith28-bit/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
        </div>
    </section>
);

export default React.memo(Contact);