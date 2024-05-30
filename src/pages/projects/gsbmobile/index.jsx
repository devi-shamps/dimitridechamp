import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option.js";
import "./style.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import transition from "../../../transition.jsx";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nextProject from "/public/images/gsbHome.png";

import acceuilGsb from "./gsb.png";
import mongoo from "./Capture-mongoo.png";
import express from "./Capture-Express.png";
import diagramme from "./diagramme.png";
import login from "./Capture-login.png";
import code from "./Capture-codeandrodi.png";

gsap.registerPlugin(ScrollTrigger);

const GsbMobile = () => {
  const projectInfoRef1 = useRef(null);
  const projectInfoRef2 = useRef(null);

  useEffect(() => {
    gsap.from(projectInfoRef1.current, {
      duration: 0.5,
      opacity: 0,
      y: "+50px",
      ease: "power1.out",
    });

    gsap.from(projectInfoRef2.current, {
      delay: 0.5, // delay of 0.5 seconds
      duration: 0.5,
      opacity: 0,
      y: "+60px",
      ease: "power1.out",
    });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> GSB - {meta.title} </title>{" "}
        <meta name="description" content={meta.description} />
      </Helmet>
      <div id="my-scrollbar" style={{ height: "100vh" }}>
        <section id="first" className="first">
          <div className="container">
            <div className="row">
              <div className="project-info">
                <p ref={projectInfoRef1}>
                  <span>Galaxy Swiss Bourdin Mobile</span>
                </p>
                <p ref={projectInfoRef2}>PROJET DE DEUXIEME ANNEE DE BTS SIO</p>
              </div>
            </div>
          </div>
        </section>

        <section id="second" className="second">
          <div className="parent">
            <div className="div1">
              <p className="text-description">
                Le projet GSB Mobile, est une application mobile sous android
                développée pour gérer centraliser les comptes-rendus des visites
                des visiteurs pharmaceutiques, ainsi que de fournira une
                description des produits du laboratoire, les coordonnées
                précises des praticiens et des informations détaillées les
                concernant. La{" "}
                <strong>
                  <i>sécurité des données</i>
                </strong>{" "}
                se fait par le biais d'une API développée en NodeJs et
                l'authentification par le biais de JWT.
              </p>
            </div>
            <div className="div2">
              <p className="text-infoprojet">
                Porjet : BTS Deuxième années
                <br />
                Travail: Autonomie
                <br />
                Technologie: Express.js, MongoDB, AndroidStudio, Java
                <br />
                Lien dépot Github (Android):{" "}
                <a
                  style={{ color: "black" }}
                  href="https://github.com/devi-shamps/GSB_Visite.git"
                >
                  Cliquez ici
                </a>
                <br />
                Lien (API):{" "}
                <a
                  style={{ color: "black" }}
                  href="https://github.com/devi-shamps/Tp-Express-Js.git"
                >
                  Cliquez ici
                </a>
              </p>
            </div>
            <div className="div3">
              <img src={mongoo} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div4">
              <p className="text-description">
                Ce projet a été découper en plusieurs étapes. La première a été
                d'établire la base de données correspondant au diagramme de
                classes que nous avons préalablement conçu en classe. La base de
                données est mise en place sur MongoDB Atlas qui est une base de
                données NoSQL (Une base de donnée ou les tables ne sont pas
                relationnelles). Ensuite, j'ai développai une API REST en
                JavaScript en utilisant Express.js accessible via l'application
                mobile Android. Cette application est conçue pour être utilisée
                par les visiteurs.
              </p>
            </div>
            <div className="div5">
              <img src={express} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div6">
              <img src={code} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div7">
              <p className="text-description">
                Plusieurs affichages sont disponibles pour les visiteurs comme
                la visualisation des praticiens dans leurs portfeuille de
                praticiens ainsi que les détails du praticiens. <br />
              </p>
            </div>
            <div className="div8">
              <img src={login} className="acceuilGsb tailleLogin" alt="GSB" />
            </div>
            <div className="div9">
              <h1 className="text-infoprojet">
                Diagramme de classe de l'application
              </h1>
              <img src={diagramme} className="acceuilGsb" alt="GSB" />
            </div>
          </div>
          <div className="endScroll">
            <h2 className="text-h2">Merci d'avoir regardé !</h2>
            <p className="text-description">
              Un projet ludique de deuxième annèe
            </p>
            <div className="spacer"></div>
          </div>
        </section>

        <Link
          className="next-project"
          to="/awoc"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={nextProject} alt="Galaxy Swiss Borudin Mobile" />
          <div className="voile"></div>
          <div className="block"></div>
          <div className="text-h1">
            AWOC
            <h4 className="text-h4">Porjet suivant</h4>
          </div>
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default transition(GsbMobile);
