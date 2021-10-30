import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.footer`
  width: 100%;
  margin-top: -15%;
  position: absolute;
  animation: showUp 1.5s ease-out;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;
