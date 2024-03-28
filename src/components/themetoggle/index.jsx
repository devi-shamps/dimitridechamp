import React, { useEffect, useState } from "react";
import { WiMoonAltNew } from "react-icons/wi";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_them" onClick={themetoggle}>
      <WiMoonAltNew />
    </div>
  );
};

export default Themetoggle;
