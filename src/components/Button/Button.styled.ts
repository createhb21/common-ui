import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ButtonVariant } from './Button';

interface ButtonProps {
  variant: ButtonVariant;
  isLoading: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant, isLoading }) => css`
    ${variant === 'primary' && theme.button.primary};
    ${variant === 'secondary' && theme.button.secondary};
    ${variant === 'third' && theme.button.third};
    ${variant === 'error' && theme.button.error};
    display: flex;
    align-items: center;
    column-gap: 6px;
    pointer-events: ${isLoading && 'none'};
  `}
`;
