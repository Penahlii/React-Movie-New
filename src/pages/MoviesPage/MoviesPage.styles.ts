import styled from "styled-components";

export const MoviesPageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.padding};
  text-align: center;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.margin};
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.margin};

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 4px 0 0 4px;
    outline: none;
  }

  button {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
    border-radius: 0 4px 4px 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.dark};
    }
  }
`;
