import React, { useState } from "react";

import Logo from "../Logo";
import Navbar from "./Navbar";
import Toggle from "../Toggle";

import { Header, Container } from "./styled";

const HeaderComponent = () => {
  const [navbarSolid] = useState(false);

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
