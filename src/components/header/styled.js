import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 3;
  transition: "1s ease";
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  background: var(--background);

  &.solid {
    background: var(--headerBackgroundSolid);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 1rem auto;

  /**
  width: 100%;
  padding: 1rem 5rem;
   */
`;
