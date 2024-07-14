import styled from "styled-components";

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${({ theme }) => theme.spacing.padding};

  div {
    background-color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => theme.spacing.padding};
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    h4 {
      margin-top: 0;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
