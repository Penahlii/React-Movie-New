import styled from "styled-components";

export const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  div {
    background-color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => theme.spacing.padding};
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 200px;

    img {
      width: 100%;
      border-radius: 8px;
    }

    h3 {
      margin-top: 0.5rem;
      font-size: 1rem;
    }
  }
`;
