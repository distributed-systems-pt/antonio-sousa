import styled from "styled-components";
import Img from "gatsby-image";
import media from "styled-media-query";

export const Container = styled.div``;

export const Image = styled(Img)`
  width: 4rem;

  ${media.lessThan('medium')`
    width: 6rem;
  `}
`;
