import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.spacing.padding};
  display: flex;
  justify-content: space-around;

  a {
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    font-size: 1.2rem;

    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
