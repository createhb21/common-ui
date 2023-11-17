import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Toast = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 40px;
    left: 50%;
    height: max-content;
    pointer-events: none;
    transform: translateX(-50%);
    z-index: ${theme.zIndex.TOAST};

    & > div:not(:first-of-type) {
      margin-top: 8px;
    }
  `}
`;
