import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "antoniosousa.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            quality: 50
            placeholder: BLURRED
            formats: [AUTO]
          )
        }
      }
    }
  `);

  return (
    <S.Hero>
      <S.HeroContainer>
        <S.HeroImage
          image={image.childImageSharp.gatsbyImageData}
          alt="António Sousa"
        />
        <S.HeroImage
          image={image.childImageSharp.gatsbyImageData}
          alt="António Sousa"
        />
        <S.HeroImage
          image={image.childImageSharp.gatsbyImageData}
          alt="António Sousa"
        />
        <S.HeroImage
          image={image.childImageSharp.gatsbyImageData}
          alt="António Sousa"
        />
      </S.HeroContainer>
    </S.Hero>
  );
};

export default Hero;
