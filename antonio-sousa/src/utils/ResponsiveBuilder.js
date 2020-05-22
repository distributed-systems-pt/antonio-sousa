import { useState, useEffect } from "react";

export const IsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    document.addEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export const Scroll = () => {
  const [navbarSolid, setNavBarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 670) {
        setNavBarSolid(true);
      } else {
        setNavBarSolid(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
  }, []);

  return navbarSolid;
};
