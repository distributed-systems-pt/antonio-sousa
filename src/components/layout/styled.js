import styled from "styled-components";
import media from "styled-media-query";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 2rem 2rem;

  ${media.greaterThan("medium")`
    padding: 0 10rem 0 10rem;
  `}

  ${media.between("small", "medium")`
    padding: 0 2.5rem 2.5rem;
  `}
`;
