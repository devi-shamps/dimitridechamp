import {Helmet, HelmetProvider} from "react-helmet-async";
import {meta} from "../../../content_option.js";
import "./style.css"
import { gsap} from 'gsap';
import { useEffect, useRef } from 'react';
import {Container} from "react-bootstrap";
import transition from "../../../transition.jsx";
import {Link} from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gsb = () => {


    const projectInfoRef1 = useRef(null);
    const projectInfoRef2 = useRef(null);

    useEffect(() => {
        gsap.from(projectInfoRef1.current, {
            duration: 0.5,
            opacity: 0,
            y: '+50px',
            ease: 'power1.out'
        });

        gsap.from(projectInfoRef2.current, {
            delay: 0.5, // delay of 0.5 seconds
            duration: 0.5,
            opacity: 0,
            y: '+60px',
            ease: 'power1.out'
        });
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title> GSB - {meta.title} </title>{" "}
                <meta name="description" content={meta.description}/>
            </Helmet>
            <div id="my-scrollbar" style={{height: '100vh'}}>

                <section id="first" className="first">
                    <div className="container">
                        <div className="row">
                            <div className="project-info">
                                <p ref={projectInfoRef1}>
                                <span>
                                    Galaxy Swiss Bourdin
                                </span>
                                </p>
                                <p ref={projectInfoRef2}>PROJET DE DEUXIEME ANNEE DE BTS SIO</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="second" className="second">
                    <Container>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-description">Le projet GSB est un projet de deuxième année de BTS SIO. Il consiste à créer une application web pour la gestion des frais de déplacement des visiteurs médicaux. L'application est composée de deux parties : une partie visiteur et une partie administrateur. La partie visiteur permet aux visiteurs médicaux de saisir leurs frais de déplacement et de les envoyer à l'administrateur pour validation. La partie administrateur permet à l'administrateur de valider les frais de déplacement des visiteurs médicaux et de les envoyer à la comptabilité pour remboursement.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pt-5">
                                <img src="/public/images/awocWeb.png" alt="GSB"/>
                            </div>
                        </div>
                    </Container>
                    <div className="endScroll">
                        <h2 className="text-h2 serif">Thanks for scrolling</h2>
                        <p className="text-description">Project made with fun and love</p>
                        <div className="spacer"></div>
                    </div>
                </section>

                <Link className="next-project" to="/awoc">
                    <img src="https://www.cathydolle.com/assets/Poterie.fcab0f47.jpg" alt='A Week Of Culture'/>
                    <div className="voile"></div>
                    <div className="block"></div>
                    <div className="text-h1">
                        GSB Mobile
                        <h4 className="text-h4">
                            Porjet suivant
                        </h4>
                    </div>
                </Link>
            </div>

        </HelmetProvider>
    )
}

export default transition(Gsb)