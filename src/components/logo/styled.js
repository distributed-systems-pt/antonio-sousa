import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import media from "styled-media-query";

export const Container = styled.div``;

export const Image = styled(GatsbyImage)`
  width: 4rem;

  ${media.lessThan("medium")`
    width: 6rem;
  `}
`;
