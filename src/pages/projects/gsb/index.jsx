import {Helmet, HelmetProvider} from "react-helmet-async";
import {meta} from "../../../content_option.js";
import "./style.css"
import photo from "./gsb.png";
import {Container} from "react-bootstrap";


export const Gsb = () => {
    return (
        <HelmetProvider>
            <section id="first" className="first">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> GSB | {meta.title} </title>{" "}
                    <meta name="description" content={meta.description}/>
                </Helmet>

                <div className="intro_secc d-block d-lg-flex align-items-center ">
                    <div className="project-info">
                        <h2>Galaxy Swiss Bourdin</h2>
                    </div>
                    <div
                        className="h_bg-image order-1 order-lg-2 h-100 "
                        style={{backgroundImage: `url(${photo})`}}
                    ></div>
                </div>
            </section>
            <section id="first" className="first">
                <Container>
                <p>Lorem ipsumContrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.
                    Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le
                    rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un
                    des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous
                    les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il
                    provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens
                    et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur
                    la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...",
                    proviennent de la section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.

                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve
                    ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux
                    de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins
                    les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce
                    mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait
                    des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes
                    Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de
                    l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
                    section 1.10.32.
                    L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                    curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi
                    reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).</p>
                </Container>
            </section>


        </HelmetProvider>
    )
}