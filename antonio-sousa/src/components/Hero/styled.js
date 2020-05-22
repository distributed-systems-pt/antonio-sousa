import styled from "styled-components";
import Img from "gatsby-image";
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

export const HeroImage = styled(Img)`
  position: absolute !important;
  width: 100%;
  transition: 0.5s;
  animation: moveInRight 1s ease-out;

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
    transform: translate(-6rem, -2rem);
    opacity: 0.5;
    animation: moveFirstHeroUpLeft 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }

  ${HeroImage}:nth-child(2) {
    transform: translate(-12rem, -4rem);
    opacity: 0.3;
    animation: moveSecondHeroUpLeft 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }

  ${HeroImage}:nth-child(3) {
    transform: translate(-16rem, -6rem);
    opacity: 0.1;
    animation: moveThirdHeroUpLeft 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
`;
