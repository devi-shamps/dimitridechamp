import {Helmet, HelmetProvider} from "react-helmet-async";
import {meta} from "../../../content_option.js";
import "./style.css"
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import {Container} from "react-bootstrap";
import transition from "../../../transition.jsx";

const Awoc = () => {
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
            <section id="first" className="first">
                <div className="container">
                    <div className="row">
                        <div className="project-info">
                            <p ref={projectInfoRef1}>
                                <span>
                                    A WEEK OF CULTURE
                                </span>
                            </p>
                            <p ref={projectInfoRef2}>PROJET DE DEUXIEME ANNEE DE BTS SIO</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="second" className="second">
                <Container>
                    <p>Lorem ipsumContrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte
                        aléatoire.
                        Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.,
                        le
                        rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé
                        à un
                        des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en
                        étudiant tous
                        les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem
                        Ipsum. Il
                        provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des
                        Suprêmes Biens
                        et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un
                        traité sur
                        la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...",
                        proviennent de la section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.

                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il
                        trouve
                        ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                        rendant vieux
                        de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots
                        latins
                        les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les
                        usages de ce
                        mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                        en fait
                        des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des
                        Suprêmes
                        Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la
                        théorie de
                        l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de
                        la
                        section 1.10.32.
                        L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour
                        les
                        curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont
                        aussi
                        reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham
                        (1914).</p>
                </Container>
            </section>
            <a className="next-project" href="/works/Poterie">
                <img src="https://www.cathydolle.com/assets/Poterie.fcab0f47.jpg" alt='A Week Of Culture'/>
                <div className="voile"></div>
                <div className="block"></div>
                <div className="text-h1">
                    Ceramic
                    <h4 className="text-h4">
                        Next Project
                    </h4>
                </div>
            </a>

        </HelmetProvider>
    )
}

export default transition(Awoc);