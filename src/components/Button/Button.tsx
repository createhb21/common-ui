import React from 'react';
import { useTranslation } from 'react-i18next';

import { LoadingSpinner } from 'components';
import type { Languages } from 'types';
import * as S from './Button.styled';

export type ButtonVariant = 'primary' | 'secondary' | 'third' | 'error';

interface ButtonProps {
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant: ButtonVariant;
  label: string;
  icon?: React.ReactNode;
  handleClickBtn?: (e: React.MouseEvent) => void;
}

const Button = ({
  className,
  isDisabled,
  isLoading = false,
  icon,
  type = 'button',
  variant,
  label,
  handleClickBtn,
}: ButtonProps) => {
  const { t } = useTranslation();

  return (
    <S.Button
      className={className}
      isLoading={isLoading}
      disabled={isDisabled}
      type={type}
      variant={variant}
      onClick={handleClickBtn}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {icon && icon}
          {t(label as Languages)}
        </>
      )}
    </S.Button>
  );
};

export default Button;
