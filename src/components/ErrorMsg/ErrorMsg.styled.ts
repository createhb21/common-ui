import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ErrorMsg = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_13};
    color: ${theme.color.red_20};
  `}
`;
