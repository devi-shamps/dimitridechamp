import "./style.css";
import "./home.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import projectData from "../../utils/projectData.js";
import Title from "../../components/projects/Title.jsx";
import Media from "../../components/projects/Media.jsx";
import {useEffect, useState} from "react";
import transition from "../../transition.jsx";
import {Link} from "react-router-dom";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);

  }, []);

  return mousePosition;
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { x, y } = useMousePosition();

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="page-wrapper">
          <div className="project-list">
            {projectData.map(({title, to}, index) =>
                <Link  to={to} >
                  <Title title={title} setActiveIndex={setActiveIndex} index={index}/>
                </Link>
            )}
          </div>

          <div className="project-media">
            {projectData.map(({mediaUrl}, index) => {
              const isActive = index === activeIndex;
              const xPos = isActive ? x : 0;
              const yPos = isActive ? y : 0;
              return <Media url={mediaUrl} active={isActive} x={xPos} y={yPos}/>
            })}
          </div>
        </div>

      </section>
    </HelmetProvider>
  );
};

export default transition(Home);