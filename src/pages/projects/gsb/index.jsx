import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option.js";
import "./style.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import transition from "../../../transition.jsx";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gsb = () => {
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
                  <span>Galaxy Swiss Bourdin</span>
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
                Le projet GSB est un projet de deuxième année de BTS SIO. Il
                consiste à créer une application web pour la gestion des frais
                de déplacement des visiteurs médicaux. L'objectif principal est
                d'optimiser la gestion de cette dépense importante tout en
                assurant la{" "}
                <strong>
                  <i>sécurité des données</i>
                </strong>
                et en simplifiant le processus pour les utilisateurs.
              </p>
            </div>
            <div className="div2">
              <p className="text-infoprojet">
                J'ai utilisé le cahier des charges comme guide essentiel pour
                définir rigoureusement les besoins des utilisateurs garantissant
                ainsi que chaque aspect de l'application réponde de manière
                optimale aux attentes des utilisateurs finaux. Mon implication
                dans la définition des besoins s'est traduite par une
                compréhension approfondie des enjeux, conduisant à des solutions
                logicielles adaptées et performantes. Design Gestion de projet
                Compréhension des besoins Méthodologie SCRUM Rejoignez-moi
              </p>
            </div>
            <div className="div3">
              <img src="/public/images/awocWeb.png" alt="GSB" />
            </div>
          </div>
          <div className="endScroll">
            <h2 className="text-h2 serif">Merci d'avoir regardé !</h2>
            <p className="text-description">
              Un projet qui à été créer en équipe avec bonne humeur
            </p>
            <div className="spacer"></div>
          </div>
        </section>

        <Link className="next-project" to="/awoc">
          <img
            src="https://www.cathydolle.com/assets/Poterie.fcab0f47.jpg"
            alt="A Week Of Culture"
          />
          <div className="voile"></div>
          <div className="block"></div>
          <div className="text-h1">
            GSB Mobile
            <h4 className="text-h4">Porjet suivant</h4>
          </div>
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default transition(Gsb);
