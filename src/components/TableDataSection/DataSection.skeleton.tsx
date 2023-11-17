import React from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import dayjs from 'dayjs';

import { formatDate } from 'utils/formatter';
import type { Languages } from 'types';
import { TableSkeleton } from './table';
import { CheckTableSkeleton } from './checkTable';
import * as S from './DataSection.styled';

interface DataSectionSkeletonProps {
  className?: string;
  children: React.ReactNode;
  btnCount?: number;
}

const DataSectionSkeleton = ({
  className,
  children,
  btnCount = 0,
}: DataSectionSkeletonProps) => {
  const { t } = useTranslation();

  return (
    <section className={className}>
      <S.Header>
        <S.LeftContent>
          <h2>{t('List' as Languages)}</h2>
          <S.Refetch>
            <span>{t('Latest updated' as Languages)}:</span>
            <time>{formatDate(dayjs())}</time>
          </S.Refetch>
        </S.LeftContent>
        <S.ActiveWrapper>
          {[...Array(btnCount)].map((_, i) => (
            <Skeleton key={i} width={130} height={40} />
          ))}
        </S.ActiveWrapper>
      </S.Header>
      {children}
    </section>
  );
};

DataSectionSkeleton.Table = TableSkeleton;
DataSectionSkeleton.CheckTable = CheckTableSkeleton;

export default DataSectionSkeleton;
