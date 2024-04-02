import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter.jsx";
import AppRoutes from "./routes.jsx";
import Headermain from "../header/index.jsx";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {

  return (
    <Router basename={import.meta.env.VITE_APP_PUBLIC_URL}>
      <div className="cursor__dot">
          <AnimatedCursor
              className="cursor"
              outerStyle={{
                  mixBlendMode: 'difference',
              }}
              innerStyle={{
                  mixBlendMode: 'difference',
              }}
              innerSize={7}
              trailingSpeed={5}
              outerSize={45}
              innerScale={1}
              outerScale={0.7}
              outerAlpha={0}
              showSystemCursor={true}
              clickables={[
                  'a',
                  {
                      target: '.custom',
                      options: {
                          outerAlpha: 0.3,
                      }
                  }
              ]}

          />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
