import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const LeftContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    & > h2 {
      ${theme.font.medium_18};
      margin-right: 12px;
      color: ${theme.color.black};
    }
  `}
`;

export const Refetch = styled.div`
  ${({ theme }) => css`
    ${theme.font.regular_13}
    display: flex;
    align-items: center;
    height: 20px;

    & > span {
      color: ${theme.color.gray_60};
    }

    & > time {
      margin: 0 2px 0 4px;
      color: ${theme.color.gray_80};
    }
  `}
`;

export const RefetchBtn = styled.button`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${theme.color.gray_10};
  `}
`;

export const ActiveWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;
