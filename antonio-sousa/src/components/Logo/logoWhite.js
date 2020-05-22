import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Image, Container } from "./styled";

const Logo = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Image fluid={image.childImageSharp.fluid} alt="Logo" />
    </Container>
  );
};

export default Logo;
