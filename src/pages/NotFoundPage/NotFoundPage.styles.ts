import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
