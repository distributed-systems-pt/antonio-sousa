import React from "react";

import Social from "../social";
import Toggle from "../toggle";

import { Container, EmailContainer, EmailLink } from "./styled";

const SideComponent = () => {
  return (
    <>
      <Container className="left">
        <Social />
      </Container>

      <Container className="right">
        <EmailContainer>
          <Toggle id="SideBar" className="SideBar" />

          <EmailLink
            target="_blank"
            href={`mailto:antonio.carlos.sousa@outlook.pt`}
          >
            antonio.carlos.sousa@outlook.pt
          </EmailLink>
        </EmailContainer>
      </Container>
    </>
  );
};

export default SideComponent;
