import React from 'react';
import { useEffect,useState } from 'react';
import '../../pages/About/AboutPage.css'
import cv from '../../cv/cv.pdf';
import e1 from "./../../img/express.png";


const About = () => {

    const [age, setAge] = useState(() => {
        // Initialize the age to 22
        const savedAge = localStorage.getItem('age');
        return savedAge ? parseInt(savedAge) : 22;
    });

    useEffect(() => {
        const today = new Date();
        const month = today.getMonth();
        const date = today.getDate();
        const year = today.getFullYear();

        // Check if today is June 18th or later in the current year
        if ((month === 5 && date >= 18) || month > 5) {
            const lastUpdated = localStorage.getItem('lastUpdated');
            const lastUpdatedDate = lastUpdated ? new Date(lastUpdated) : null;

            if (!lastUpdatedDate || lastUpdatedDate.getFullYear() < year) {
                setAge((prevAge) => {
                    const newAge = prevAge + 1;
                    localStorage.setItem('age', newAge);
                    localStorage.setItem('lastUpdated', today.toString());
                    return newAge;
                });
            }
        }
    }, []);

    return (
        <section className="sobre-mi" id="sobre-mi">
            <h2 className="heading">
                About me
            </h2>

            <div className="row container">
                <div className="columns" data-aos="fade-right" data-aos-delay="300">
                    <h3>who I am
                    </h3>
                    <h4>My name is Lohith V P and I am a Software Engineer.
                    </h4>
                    <p>I am currently working as a Software Engineer Trainee at Trianz, where I focus on VM migration projects, specifically on pre-migration steps to ensure seamless transitions. In addition, I have a solid background in web development using the MERN stack and Spring Boot. I am also skilled in AWS, Docker, MySQL , Microservices and Linux.
                    </p>
                    <ul>
                        <li>
                            <p>
                                <span>Age:{" "}
                                </span>
                                {age}
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    Hobbies:{" "}
                                </span>
                                Anime, Cricket and Badminton
                            </p>
                        </li>
                        <li>
                            <p><span>Email:</span> lohithvp18@gmail.com</p>
                        </li>
                        <li>
                            <p>
                                <span>From:{" "}
                                </span>
                                Bengaluru, Karnataka
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
                            <img alt="Tailwindcss" className="icons-skils" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png" />
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
                            <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" />
                            <h5>VS Code</h5></div>
                        <div> */}
                        <div>
                            <img alt="AWS" className="icons-skils" src="https://wallpapers.com/images/hd/a-w-s-cloud-logo-ej8ve3tdkcqo008x-2.jpg" />
                            <h5>AWS</h5>
                        </div>

                        <div>
                            <img alt="java" className="icons-skils" src="https://www.vectorlogo.zone/logos/java/java-icon.svg" />
                            <h5>Java</h5>
                        </div>
                        <div>
                            <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <h5>Git</h5>
                        </div>
                        <div>
                            <img alt="SpringBoot" className="icons-skils" src="https://konsultanitbandung.net/wp-content/uploads/2020/09/spring-3-logo-png-transparent.png" />
                            <h5>SpringBoot</h5>
                        </div>
                        <div>
                            <img alt="Docker" className="icons-skils" src="https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png" />
                            <h5>Docker</h5>
                        </div>
                        <div>
                            <img alt="MySQL" className="icons-skils" src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" />
                            <h5>MySQL</h5>
                        </div>
                        <div>
                            <img alt="Linux" className="icons-skils" src="https://m.media-amazon.com/images/I/61SC+vgMGfL._AC_UF1000,1000_QL80_.jpg" />
                            <h5>Linux</h5>
                        </div>
                        <div>
                            <img alt="python" className="icons-skils" src="https://www.vectorlogo.zone/logos/python/python-icon.svg" />
                            <h5>Python</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default React.memo(About);