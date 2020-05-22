import styled from "styled-components";
import media from "styled-media-query";

export const Button = styled.a`
  font-size: 1.8rem;
  text-decoration: none;
  padding: 1.8rem 3rem;
  color: var(--highLightText);
  display: inline-block;
  transition: all 0.2s;
  position: relative;

  border: 0.1rem var(--highlight) solid;

  animation: moveDownToUp 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-0.1rem);
  }

  ${media.lessThan("medium")`
    font-size: 2rem;
    padding: 2.8rem 5.8rem;
    margin-top: 2rem;
  `}
`;
