import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.footer`
  width: 100%;
  position: absolute;
  animation: showUp 1.5s ease-out;
  bottom: 0;
  margin-bottom: 1rem;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;
