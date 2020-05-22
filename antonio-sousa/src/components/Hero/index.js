import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "antoniosousa.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <S.Hero>
      <S.HeroContainer>
        <S.HeroImage fluid={image.childImageSharp.fluid} alt="António Sousa" />

        <S.HeroImage fluid={image.childImageSharp.fluid} alt="António Sousa" />
        <S.HeroImage fluid={image.childImageSharp.fluid} alt="António Sousa" />
        <S.HeroImage fluid={image.childImageSharp.fluid} alt="António Sousa" />

      </S.HeroContainer>
    </S.Hero>
  );
};

export default Hero;
