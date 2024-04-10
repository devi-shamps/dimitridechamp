import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-text">
        <span className="slide-in-left">Bienvenue dans mon </span>
        <span className="slide-in-right">Univers.</span>
      </div>
      <div className="loading-barr"></div>
    </div>
  );
};

export default Loader;
