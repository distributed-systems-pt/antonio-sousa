import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Image, Container } from "./styled";

const Logo = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            quality: 50
            placeholder: BLURRED
            formats: [AUTO]
          )
        }
      }
    }
  `);

  return (
    <Container>
      <Image image={image.childImageSharp.gatsbyImageData} alt="Logo" />
    </Container>
  );
};

export default Logo;
