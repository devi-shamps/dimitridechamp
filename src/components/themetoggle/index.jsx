import React, { useEffect, useState } from "react";
import { WiMoonAltNew } from "react-icons/wi";
import './style.css';

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
    <div className="nav_them" >
      <button onClick={themetoggle}  className="clickthem"/>
    </div>
  );
};

export default Themetoggle;
