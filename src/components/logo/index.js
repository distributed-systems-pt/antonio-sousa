import React, { useState, useEffect } from "react";

import LogoBlack from "./logoBlack";
import LogoWhite from "./logoWhite";

const Logo = () => {
  // TODO: Replace this for UseReducer (create a reducer and add a dispatcher on sideBar)
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(window.__theme);

    window.__onThemeChangeForLogo = () => setTheme(window.__theme);
  }, []);

  return theme === "dark" ? <LogoWhite /> : <LogoBlack />;
};

export default Logo;
