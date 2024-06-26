import { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand home-logo desktop-only" to="/">
            Accueil
          </Link>
          <h1 className="navbar-brand nav_logo logo">{logotext}</h1>
          <Link className="navbar-brand home-logo desktop-only" to="/about">
            A propos
          </Link>
          <Link
            className="navbar-brand home-logo desktop-only contact-link"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="navbar-brand home-logo desktop-only veille-link"
            to="/veille"
          >
            Veille Technologique
          </Link>
          <button
            className="menu__button  nav_ac mobile-only"
            onClick={handleToggle}
          >
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Accueil
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      A propos
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/veille" className="my-3">
                      Ma veille info{" "}
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
            </div>
            <p className="copyright m-0">© 2024, Dimitri Dechamp</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
