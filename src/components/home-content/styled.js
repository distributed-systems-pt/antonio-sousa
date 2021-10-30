import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("small")`
    min-height: 85rem; /** old 88 */
    height: 99.2vh;
  `}

  ${media.lessThan("small")`
    /** because fixed header */
    height: 95vh;
    padding-top: 7rem;
  `}
`;

export const Container = styled.div`
  width: 75rem;
  position: relative;
  transition: all 0.5s;
  margin-bottom: 5rem;
  letter-spacing: 0.1rem;

  ${media.lessThan("medium")`
    width: 100%;
  `}

  @media screen and (min-width: 1920px) {
    margin-right: 6rem;
  }
`;

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: 900;
  color: var(--primaryColor);
  font-size: 8.5rem;
  margin-bottom: 4rem;

  ${media.lessThan("medium")`
    font-size: 6.5rem;
  `}
`;

export const TitleSpan = styled.span`
  animation: showUp 2s ease-out;
`;

export const DescriptionContainer = styled.div`
  width: 80%;
  margin-top: 1.5rem;

  ${media.lessThan("medium")`
    width: 100%;
    margin-top: 4.5rem;
  `}
`;

export const Description = styled.span`
  margin-top: 1.5rem;
  display: block;
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 2.2rem;
  line-height: 2;
  animation: moveInRight 1s ease-out;
  color: var(--primaryColor);
`;

export const HighLightSpan = styled.span`
  color: var(--highlight);
`;
