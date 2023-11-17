import React from 'react';
import { useTranslation } from 'react-i18next';

import type { Languages } from 'types';
import * as S from './ErrorMsg.styled';

interface ErrorMsgProps {
  id?: string;
  className?: string;
  message?: string;
}

const ErrorMsg = ({ id, className, message }: ErrorMsgProps) => {
  const { t } = useTranslation();

  if (!message) {
    return null;
  }
  return (
    <S.ErrorMsg id={id} className={className} role="alert">
      {t(message as Languages)}
    </S.ErrorMsg>
  );
};

export default ErrorMsg;
