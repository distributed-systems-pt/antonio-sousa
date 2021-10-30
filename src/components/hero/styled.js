import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import media from "styled-media-query";

export const Hero = styled.div`
  position: relative;
  align-self: flex-end;
  transition: 0.5s;
  margin-left: 3rem;

  ${media.lessThan("large")`
    display: none;
  `}

  @media screen and (min-width: 1920px) {
    margin-left: 6rem;
  }
`;

export const HeroImage = styled(GatsbyImage)`
  position: absolute !important;
  width: 100%;
  transition: 0.5s;
  animation: moveInRight 0.8s ease-out;

  @media screen and (max-height: 950px) {
    bottom: 0;
  }

  @media screen and (min-height: 950px) {
    top: 25%;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  width: 40rem; /** TODO: Create var -> Hero width */
  transition: 0.5s;

  ${media.lessThan("large")`
    width: 37rem;
  `}

  @media screen and (min-height: 950px) {
    height: 100vh;
  }

  ${HeroImage}:nth-child(1) {
    opacity: 0;
    animation: moveFirstHeroUpLeft 1.8s ease-out 0.55s;
    animation-fill-mode: backwards;
  }

  ${HeroImage}:nth-child(2) {
    opacity: 0;
    animation: moveSecondHeroUpLeft 1.8s ease-out 0.55s;
    animation-fill-mode: backwards;
  }

  ${HeroImage}:nth-child(3) {
    opacity: 0;
    animation: moveThirdHeroUpLeft 1.8s ease-out 0.55s;
    animation-fill-mode: backwards;
  }
`;
