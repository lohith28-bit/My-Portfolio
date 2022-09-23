import React from 'react';
import '../../pages/Project/ProjectPage.css'
// import { Link } from 'react-router-dom';
// import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Games.png`)}
                            alt='projects'

                        />
                        <div className="content">
                            <h3>Games</h3>
                            <p>
                                Few games using js
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span>-</span> CSS3
                                <span>-</span> JavaScript
                                <span>-</span> Bootstrap
                            </p>
                            <a href="https://lohith28-bit.github.io/JavaScript-Games/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/lohith28-bit/Javasript-Games.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./color_Hex.png`)}
                            alt='project'
                        />
                        <div className="content">
                            <h3>Hexa code converter</h3>
                            <p>
                                Type any color name and get it in hexa code
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span>-</span> CSS3
                                <span>-</span> JavaScript
                                <span>-</span> React
                            </p>
                            <a href="https://hexacode-converter.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/lohith28-bit/ColorName-to-Hexacode.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./BloodBank.png`)}
                            alt='project'
                        />
                        <div className="content">
                            <h3>Blood Bank Website</h3>
                            <p>
                                Gives the complete connection between patients, hospitals, donors
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span>-</span> CSS3
                                <span>-</span> JavaScript
                                <span>-</span> Bootstrap
                            </p>
                            {/* <a href className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./NewsApp.png`)}
                            alt='projects'
                        />
                        <div className="content">
                            <h3>News App</h3>
                            <p>
                                Get the real time news in your finger tip
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span>-</span> CSS3
                                <span>-</span> JavaScript
                                <span>-</span> Bootstrap
                                <span>-</span> React
                            </p>
                            {/* <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a> */}
                            <a href='https://github.com/lohith28-bit/NewsApp.git' className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./modern UI landing page.png`)}
                            alt='projects'
                        />
                        <div className="content">
                            <h3>Modern UI</h3>
                            <p>
                                Modern UI langing page
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span>-</span> CSS3
                                <span>-</span> JavaScript
                                <span>-</span> React
                            </p>
                            <a href='https://modern-ui-landingpage1.netlify.app/' className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/lohith28-bit/Modern-UI-design.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Weather App.png`)}
                            alt='projects'
                        />
                        <div className="content">
                            <h3>Weather App</h3>
                            <p>
                                Get the real time weather detail of any place
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span>-</span> CSS3
                                <span>-</span> JavaScript
                                <span>-</span> nodejs
                                <span>-</span> expressjs
                            </p>
                            {/* <a href className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a> */}
                            <a href="https://github.com/lohith28-bit/WeatherApp.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link>
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div> */}
        </section>

    )
};
export default React.memo(Project);