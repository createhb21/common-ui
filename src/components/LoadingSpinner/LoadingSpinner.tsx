import React from 'react';

import * as S from './LoadingSpinner.styled';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <S.LoadingSpinnerWrapper className={className}>
      <S.Spinner />
    </S.LoadingSpinnerWrapper>
  );
};

export default LoadingSpinner;
