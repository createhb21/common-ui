import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.input.default};
  `}
`;
