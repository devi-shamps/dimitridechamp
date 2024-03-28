import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter.jsx"
import { Home } from "../pages/home/index.jsx";
import { Portfolio } from "../pages/portfolio/index.jsx";
import { ContactUs } from "../pages/contact/index.jsx";
import { About } from "../pages/about/index.jsx";
import { Socialicons } from "../components/socialicons/index.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {Gsb} from "../pages/projects/gsb/index.jsx";
import {Veille} from "../pages/veille/index.jsx";
import Themetoggle from "../components/themetoggle/index.jsx";
import React from "react";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/gsb" element={<Gsb />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/veille" element={<Veille />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
        <Themetoggle />
    </div>
  );
}

export default AppRoutes;