import styled from "styled-components";
import media from "styled-media-query";

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;

  ${media.lessThan("medium")`
    justify-content: center;
    flex-direction: row;
  `}
`;

export const SocialItemList = styled.li`
  transition: all 0.2s;
  margin: 0 auto;

  ${media.lessThan("medium")`
    margin: 0 1.5rem;
  `}

  &:hover {
    transform: translateY(-0.5rem);
    color: var(--highlight);
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  padding: 1rem;
  color: var(--secondaryColor);

  &:hover {
    color: var(--highlight);
  }
`;

export const IconWrapper = styled.div`
  width: 2.5rem;

  ${media.lessThan("medium")`
    width: 3.5rem;
  `}
`;
