import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TabBtnWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 24px;
    border-bottom: 1px solid ${theme.color.gray_20};
  `}
`;

export const TabBtn = styled.button`
  ${({ theme }) => css`
    padding: 7px 9px;
    ${theme.font.medium_16};
    color: ${theme.color.gray_50};

    &[aria-selected='true'] {
      border-bottom: 2px solid ${theme.color.black};
      padding-bottom: 5px;
      color: ${theme.color.black};
    }
    &[aria-selected='false'] {
      :hover {
        color: ${theme.color.gray_60};
      }
    }
  `}
`;
