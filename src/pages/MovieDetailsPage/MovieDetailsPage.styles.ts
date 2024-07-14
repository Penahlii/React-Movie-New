import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.padding};
  text-align: center;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.margin};
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: ${({ theme }) => theme.spacing.margin};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.margin};
  }
`;
