import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: none;

  &.SideBar {
    ${media.greaterThan("small")`
      transform: rotate(90deg) scale(0.5);
      display: block;
  `};
  }

  ${media.lessThan("medium")`
      transform: scale(0.7);
      display: block;
  `};
`;

export const Toggle = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 9rem;
  height: 5rem;
  background-color: #83d8ff;
  border-radius: 8rem;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export const ToggleHander = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 0.3rem;
  left: 0.3rem;
  width: 4.4rem;
  height: 4.4rem;
  background-color: #ffcf96;
  border-radius: 5rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
`;

export const Crater = styled.span`
  position: absolute;
  background-color: #e8cda5;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;

  &.crater1 {
    top: 1.8rem;
    left: 1rem;
    width: 0.4rem;
    height: 0.4rem;
  }

  &.crater2 {
    top: 2.8rem;
    left: 2.2rem;
    width: 0.6rem;
    height: 0.6rem;
  }

  &.crater3 {
    top: 1rem;
    left: 2.5rem;
    width: 0.8rem;
    height: 0.8rem;
  }
`;

export const Star = styled.span`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;

  &.star1 {
    top: 1rem;
    left: 3.5rem;
    z-index: 0;
    width: 3rem;
    height: 0.3rem;
  }

  &.star2 {
    top: 1.8rem;
    left: 2.8rem;
    z-index: 1;
    width: 3rem;
    height: 0.3rem;
  }

  &.star3 {
    top: 2.7rem;
    left: 4rem;
    z-index: 0;
    width: 3rem;
    height: 0.3rem;
  }

  &.star4,
  &.star5,
  &.star6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &.star4 {
    top: 1.6rem;
    left: 1.1rem;
    z-index: 0;
    width: 0.2rem;
    height: 0.2rem;
    transform: translate3d(0.3rem, 0, 0);
  }

  &.star5 {
    top: 3.2rem;
    left: 1.7rem;
    z-index: 0;
    width: 0.3rem;
    height: 0.3rem;
    transform: translate3d(0.3rem, 0, 0);
  }

  &.star6 {
    top: 3.6rem;
    left: 2.8rem;
    z-index: 0;
    width: 0.2rem;
    height: 0.2rem;
    transform: translate3d(0.3rem, 0, 0);
  }
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + ${Toggle} {
    background-color: #749dd6;

    &:before {
      color: #749ed7;
    }

    &:after {
      color: #ffffff;
    }

    ${ToggleHander} {
      background-color: #ffe5b5;
      transform: translate3d(4rem, 0, 0) rotate(0);
    }

    ${Crater} {
      opacity: 1;
    }

    ${Star} {
      &.star1 {
        width: 0.2rem;
        height: 0.2rem;
      }

      &.star2 {
        width: 0.4rem;
        height: 0.4rem;
        transform: translate3d(-0.5rem, 0, 0);
      }

      &.star3 {
        width: 0.2rem;
        height: 0.2rem;
        transform: translate3d(-0.7rem, 0, 0);
      }

      &.star4,
      &.star5,
      &.star6 {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      &.star4 {
        transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      &.star5 {
        transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      &.star6 {
        transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    }
  }
`;
