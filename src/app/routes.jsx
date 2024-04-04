import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter.jsx"
import Home  from "../pages/home/index.jsx";
import { Portfolio } from "../pages/portfolio/index.jsx";
import { ContactUs } from "../pages/contact/index.jsx";
import About  from "../pages/about/index.jsx";
import { Socialicons } from "../components/socialicons/index.jsx";
import Gsb  from "../pages/projects/gsb/index.jsx";
import {Veille} from "../pages/veille/index.jsx";
import Themetoggle from "../components/themetoggle/index.jsx";

import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = withRouter(({ location }) => (
    <AnimatePresence mode={"wait"}>
      <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/gsb" element={<Gsb />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="*" element={<Home />} />
          <Route path="/gsb" element={<Gsb />} />
      </Routes>
    </AnimatePresence>
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
