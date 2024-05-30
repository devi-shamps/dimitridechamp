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

import acceuilEndima from "./Capture-Endima.png";
import profile from "./Capture-profile.png";
import lesPostes from "./Capture-lespostes.png";
import diagramme from "./diagramme.png";
import recherche from "./Capture-recherche.png";

gsap.registerPlugin(ScrollTrigger);

const Endima = () => {
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
        <title> Endîma - {meta.title} </title>{" "}
        <meta name="description" content={meta.description} />
      </Helmet>
      <div id="my-scrollbar" style={{ height: "100vh" }}>
        <section id="first" className="first">
          <div className="container">
            <div className="row">
              <div className="project-info">
                <p ref={projectInfoRef1}>
                  <span>Endima</span>
                </p>
                <p ref={projectInfoRef2}>PROJET PERSONNEL EN COLLABORATION</p>
              </div>
            </div>
          </div>
        </section>

        <section id="second" className="second">
          <div className="parent">
            <div className="div1">
              <p className="text-description">
                Endîma, abréviation de Endloww et Dima (qui sont des pseudonyme)
                représente bien plus qu'un mod pour le jeu vidéo "Minecraft".
                C'est le résultat d'une collaboration passionnante entre deux
                amis, Aurelien Blanchet et moi-même. En tant que développeurs
                juniors, nous unissons nos forces pour créer quelque chose
                d'unique et apporter notre contribution au monde Minecraft, en
                mêlant notre passion pour le développement, les jeux vidéo et la
                création.
              </p>
            </div>
            <div className="div2">
              <p className="text-infoprojet">
                Porjet : Personnel et collaboratif
                <br />
                Travail: Groupe
                <br />
                Technologie: Java, 3D
                <br />
                Lien dépot Github :{" "}
                <a
                  style={{ color: "black" }}
                  href="https://github.com/Endloww/Endima-1.19.2"
                >
                  Cliquez ici
                </a>
              </p>
            </div>
            <div className="div3">
              <img src={acceuilEndima} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div4">
              <p className="text-description">
                Ce projet est une véritable aventure pour nous deux. En
                travaillant sur Endîma, nous avons l'opportunité de développer
                et d'affiner plusieurs compétences clés, mais également
                l'opportunité de concrétiser de simples idées pour en faire un
                projet concret.
              </p>
            </div>
          </div>
          <div className="endScroll">
            <h2 className="text-h2 serif">Merci d'avoir regardé !</h2>
            <p className="text-description">
              Un projet ludique, fun et collaboratif entre amis
            </p>
            <div className="spacer"></div>
          </div>
        </section>

        <Link className="next-project" to="/gsb">
          <img src={nextProject} alt="Galaxy Swiss Bourdin" />
          <div className="voile"></div>
          <div className="block"></div>
          <div className="text-h1">
            GSB
            <h4 className="text-h4">Porjet suivant</h4>
          </div>
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default transition(Endima);
