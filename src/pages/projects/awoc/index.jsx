import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option.js";
import "./style.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import transition from "../../../transition.jsx";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nextProject from "/public/images/endimaHome.png";

import acceuilAwoc from "./capture-loginAwoc.png";
import profile from "./Capture-profile.png";
import lesPostes from "./Capture-lespostes.png";
import diagramme from "./diagramme.png";
import recherche from "./Capture-recherche.png";

gsap.registerPlugin(ScrollTrigger);

const Awoc = () => {
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
                  <span>A Week Of Culture</span>
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
                AWOC, abréviation de A Week Of Culture, est une application web
                dédiée aux étudiants de première et deuxième année du BTS SIO à
                Gabriel Fauré. Ce projet collaboratif a pour ambition de créer
                un espace où chaque utilisateur peut partager un moment culturel
                hebdomadaire, interagir avec les contributions des autres et
                ainsi promouvoir des échanges enrichissants. La plateforme
                propose une expérience interactive et immersive. L'objectif est
                simple : partager une partie de votre culture, découvrir celle
                des autres et encourager une communauté de collaboration.
              </p>
            </div>
            <div className="div2">
              <p className="text-infoprojet">
                Porjet : BTS Deuxième années
                <br />
                Travail: Groupe
                <br />
                Design: Bootstrap + CSS
                <br />
                Lien dépot Github :{" "}
                <a
                  style={{ color: "black" }}
                  href="https://github.com/zet74prof/AWeekOfCulture"
                >
                  Cliquez ici
                </a>
              </p>
            </div>
            <div className="div3">
              <img src={acceuilAwoc} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div4">
              <p className="text-description">
                Le développement d'AWOC a été réalisé selon la méthodologie
                SCRUM, une approche agile qui met l'accent sur la collaboration
                et la flexibilité. En collaboration avec cinq autres étudiants,
                nous avons utilisé des user stories (sur GitHub Project) pour
                identifier les besoins des utilisateurs, attribuer les tâches et
                organiser des réunions une fois par semaine afin de suivre
                régulièrement notre progression.
              </p>
            </div>
            <div className="div5">
              <img src={profile} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div6">
              <img src={lesPostes} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div7">
              <p className="text-description">
                Le design principal pour notre application web a été inspirer
                par celui d'.
                <a
                  style={{ color: "black" }}
                  href="https://github.com/zet74prof/AWeekOfCulture"
                >
                  Instagram.
                </a>{" "}
                Les utilisateurs peuvent créer un compte et se connecter, créer,
                voir ou intérgair avec des postes en mettant des j'aimes ou des
                commentaire. L'utilisateur qui connecter peut également
                visuliser le profile d'un autre utilisateur.
              </p>
            </div>
            <div className="div8">
              <img src={recherche} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div9">
              <h1 className="text-infoprojet">
                Diagramme de classe de l'application
              </h1>
              <img src={diagramme} className="acceuilGsb" alt="GSB" />
            </div>
          </div>
          <div className="endScroll">
            <h2 className="text-h2 serif">Merci d'avoir regardé !</h2>
            <p className="text-description">
              Un projet ludique et fun en groupe
            </p>
            <div className="spacer"></div>
          </div>
        </section>

        <Link className="next-project" to="/endima">
          <img src={nextProject} alt="Endima" />
          <div className="voile"></div>
          <div className="block"></div>
          <div className="text-h1">
            Endima
            <h4 className="text-h4">Porjet suivant</h4>
          </div>
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default transition(Awoc);
