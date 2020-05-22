import React, { useEffect, useState } from "react";

import {
  Container,
  Checkbox,
  Toggle,
  ToggleHander,
  Crater,
  Star,
} from "./styled";

const SIDEBAR = "SideBar";

const ToggleComponent = (props) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(window.__theme);

    props.id === SIDEBAR
      ? (window.__onThemeChangeSidebar = () => setTheme(window.__theme))
      : (window.__onThemeChange = () => setTheme(window.__theme));
  }, [props.id]);

  return (
    <Container className={props.className}>
      <Checkbox
        type="checkbox"
        id={props.id}
        checked={theme === "dark" ? true : false}
        onChange={() => {
          window.__setPreferredTheme(theme === "dark" ? "light" : "dark");
        }}
      />
      <Toggle htmlFor={props.id}>
        <ToggleHander>
          <Crater className="crater1" />
          <Crater className="crater2" />
          <Crater className="crater3" />
        </ToggleHander>
        <Star className="star1" />
        <Star className="star2" />
        <Star className="star3" />
        <Star className="star4" />
        <Star className="star5" />
        <Star className="star6" />
      </Toggle>
    </Container>
  );
};

export default ToggleComponent;
