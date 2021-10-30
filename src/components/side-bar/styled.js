import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 2.5rem;
  position: fixed;
  bottom: 0;

  &.left {
    left: 4rem;
  }

  &.right {
    right: 4rem;
  }

  ${media.greaterThan("medium")`
    @media screen and (min-height: 620px) {
      &::after {
        content: "";
        display: block;
        width: 0.1rem;
        height: 9rem;
        background-color: var(--secondaryColor);
        margin: 0 auto;
      }
    }
  `}

  ${media.lessThan("medium")`
    &.left {
      animation: showUp 2s ease-out 1s;
      opacity: 1;
      width: 100%;
      left: 0;
    }

    &.right {
      display: none;
    }
  `}
`;

export const ListItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

export const Item = styled.li`
  margin: 0 auto;
`;

export const Link = styled.a`
  padding: 1rem;
  color: var(--secondaryColor);
`;

export const IconWrapper = styled.div`
  width: 2.5rem;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailLink = styled.a`
  text-decoration: none;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  color: var(--primaryColor);
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
  writing-mode: vertical-rl;
  margin: 1rem 0 2rem 0;
  padding: 1rem;
  cursor: pointer;

  @media screen and (max-height: 350px) {
    font-size: 0.8rem;
  }
`;
