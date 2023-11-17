import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { Languages } from 'types';
import * as S from './Input.styled';

interface InputProps {
  id?: string;
  className?: string;
  placeholder: string;
  maxLength?: number;
  disabled?: boolean;
  value?: string;
  errorId?: string;
  hasError?: boolean;
  register?: UseFormRegisterReturn<string>;
}

const Input = ({
  id,
  className,
  placeholder,
  maxLength,
  disabled,
  value,
  errorId,
  hasError = false,
  register,
}: InputProps) => {
  const { t } = useTranslation();

  return (
    <S.Input
      id={id}
      className={className}
      placeholder={t(placeholder as Languages)}
      maxLength={maxLength}
      disabled={disabled}
      value={value}
      aria-invalid={hasError}
      aria-errormessage={errorId}
      {...register}
    />
  );
};

export default Input;
