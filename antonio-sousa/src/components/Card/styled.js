import styled from "styled-components";
import Img from "gatsby-image";

export const Image = styled(Img)`
  position: absolute !important; /** because gatsby inline css (or use inline also) */
  width: 100%;
  transition: 0.5s;
`;

export const Container = styled.div`
  position: relative;
  width: 36rem;
  height: 64rem;
  background: rgba(0, 0, 0, 1);
  transition: 0.5s;

  &:hover {
    ${Image}:nth-child(4) {
      transform: translate(160px, -160px);
      opacity: 1;
    }

    ${Image}:nth-child(3) {
      transform: translate(120px, -120px);
      opacity: 0.8;
    }

    ${Image}:nth-child(2) {
      transform: translate(80px, -80px);
      opacity: 0.6;
    }

    ${Image}:nth-child(1) {
      transform: translate(40px, -40px);
      opacity: 0.4;
    }
  }
`;
