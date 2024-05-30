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
import ficheFrais from "./capture - fichefrais.png";
import saisiFicheFrais from "./Capture-saisifichefrais.png";
import diagramme from "./diagramme.png";
import comptable from "./Capture-comptable.png";

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
                Design: Bootstrap
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
              <img src={acceuilGsb} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div4">
              <p className="text-description">
                J'ai utilisé le cahier des charges, fournie en début d'année,
                comme guide essentiel pour définir rigoureusement les besoins
                des utilisateurs garantissant ainsi que chaque aspect de
                l'application réponde de manière optimale aux attentes des
                utilisateurs. Mon implication dans la définition des besoins
                s'est traduite par une compréhension approfondie des enjeux,
                conduisant à des solutions logicielles adaptées et performantes.
                Design Gestion de projet Compréhension des besoins Méthodologie
                SCRUM.
              </p>
            </div>
            <div className="div5">
              <img src={ficheFrais} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div6">
              <img src={saisiFicheFrais} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div7">
              <p className="text-description">
                Plusieurs affichages sont disponibles pour les visiteurs comme
                la visualisation de leurs fiche de frais en fonction du mois
                choisi dans le menu déroulant "mois". Ou bien encore la saisie
                de la fiche de frais du mois en cours. <br />
                <br />
                De plus, si l'utilisateur connecté est comptable (Role Comptable
                au sein de l'application) celui-ci pourra visualiser et/ou
                modifier les fiches de frais des visiteurs dans une vue dédiée.
              </p>
            </div>
            <div className="div8">
              <img src={ficheFrais} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div9">
              <img src={comptable} className="acceuilGsb" alt="GSB" />
            </div>
            <div className="div10">
              <h1 className="text-infoprojet">
                Diagramme de classe de l'application
              </h1>
              <img src={diagramme} className="acceuilGsb" alt="GSB" />
            </div>
          </div>
          <div className="endScroll">
            <h2 className="text-h2 serif">Merci d'avoir regardé !</h2>
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
