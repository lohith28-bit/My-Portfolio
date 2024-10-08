import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import express from "./../../../img/express-cropped.svg"
import e1 from "./../../../img/express.png"
// import e1 from "./../../img/express.png";

export default function ParticleHeaderBg() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-2-css"
      options={{
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          color: "#000"
        },
        fullScreen: {
          enable: false
        },
        interactivity: {

          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            grab: {
              distance: 400,
            },
            repulse: {
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#000",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 24,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
            },
          },
          rotate: {
            random: {
              enable: true,
            },
            animation: {
              enable: true,
              speed: 5,
            },
            direction: "random",
          },
          shape: {
            options: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              char: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              polygon: {
                sides: 5,
              },
              star: {
                sides: 5,
              },
              image: [
                {
                  src: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://wallpapers.com/images/hd/a-w-s-cloud-logo-ej8ve3tdkcqo008x-2.jpg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://m.media-amazon.com/images/I/61SC+vgMGfL._AC_UF1000,1000_QL80_.jpg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://konsultanitbandung.net/wp-content/uploads/2020/09/spring-3-logo-png-transparent.png",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: { e1 },
                  width: 20,
                  height: 20,
                },
              ],
              images: [
                {
                  src: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: { e1 },
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://konsultanitbandung.net/wp-content/uploads/2020/09/spring-3-logo-png-transparent.png",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
                  width: 20,
                  height: 20,
                },
              ],
            },
            type: "image",
          },
          size: {
            value: 50,
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
          stroke: {
            width: "100px",
            color: {
              value: "#000000",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
              },
            },
          },
        },
      }}
    ></Particles>
  );
}
