import styled from "styled-components";

export const HomePageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.padding};
  text-align: center;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.margin};
  }
`;
