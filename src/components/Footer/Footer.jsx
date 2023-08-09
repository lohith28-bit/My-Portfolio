import React from 'react';
import './Footer.css';

/* Multi idioma */

// const {number} = process.env;
// const whatsappLink = `https://api.whatsapp.com/send?phone=${number}`;
const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p> Page created by Lohith V P{"  "}
                    &copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/lohithvp/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/lohith28-bit/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href= "https://t.me/Its_lohith" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);