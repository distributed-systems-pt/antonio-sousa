import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Image } from "./styled";

const Card = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "antoniosousa_w_cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Image fluid={image.childImageSharp.fluid} alt="António Sousa" />      
      <Image fluid={image.childImageSharp.fluid} alt="António Sousa" />
      <Image fluid={image.childImageSharp.fluid} alt="António Sousa" />
      <Image fluid={image.childImageSharp.fluid} alt="António Sousa" />
    </Container>
  );
};

export default Card;
