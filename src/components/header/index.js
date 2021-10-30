import React, { useState } from "react";

import Logo from "../logo";
import Navbar from "./navbar";
import Toggle from "../toggle";

import { Header, Container } from "./styled";

const HeaderComponent = () => {
  const [navbarSolid] = useState(true);

  return (
    <Header className={navbarSolid && "solid"}>
      <Container>
        <Logo />
        <Navbar />
        <Toggle id="Header" className="Header" />
      </Container>
    </Header>
  );
};

export default HeaderComponent;
