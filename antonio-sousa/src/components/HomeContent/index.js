import React from "react";

import Hero from "../Hero";
import Button from "../Button";

import {
  Wrapper,
  Container,
  Title,
  TitleSpan,
  DescriptionContainer,
  Description,
  HighLightSpan,
} from "./styled";

const HomeContent = () => (
  <Wrapper>
    <Container>
      <Title>
        <TitleSpan>
          Hi, I'm <HighLightSpan>António</HighLightSpan>
        </TitleSpan>
        <DescriptionContainer>
          <Description>
            Software Engineer, with more than four years of professional
            experience.
          </Description>
          <Description>
            Currently based in Porto, Portugal, working as backend engineer .net
            at{" "}
            <HighLightSpan>
              <b>Farfetch</b>
            </HighLightSpan>
            . As a hobby, I build things for the web, most developed in Java,
            Node, and React.
          </Description>
        </DescriptionContainer>
      </Title>

      <Button link="mailto:antonio.carlos.sousa@outlook.pt">Get In Touch</Button>
    </Container>
    <Hero />
  </Wrapper>
);

export default HomeContent;
