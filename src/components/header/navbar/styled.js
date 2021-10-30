import styled from "styled-components";
import media from "styled-media-query";

export const Navbar = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  transition: 0.5s;

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled.a`
  display: block;
  padding: 1rem;
  text-decoration: none;
  /**letter-spacing: 0.45rem;*/
  letter-spacing: 0.1rem;
  color: var(--secondaryColor);
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "Playfair Display", serif;
  cursor: pointer;
  /**font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;*/
  /**font-family: Playfair Display, serif, "San Francisco", "SF Pro Text",
    -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue",
    "Segoe UI", Arial;*/
`;
