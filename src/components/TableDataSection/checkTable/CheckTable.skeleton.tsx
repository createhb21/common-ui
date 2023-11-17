import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTranslation } from 'react-i18next';

import type { ColumnTable, Languages } from 'types';
import * as S from './CheckTable.styled';
import { CheckboxBtn } from 'components';

interface CheckTableSkeletonProps {
  className?: string;
  columnTable: ColumnTable;
  rowCount?: number;
}

const CheckTableSkeleton = ({
  className,
  columnTable,
  rowCount = 10,
}: CheckTableSkeletonProps) => {
  const { t } = useTranslation();

  return (
    <S.Table className={className}>
      <thead>
        <S.HeadRow>
          <th>
            <CheckboxBtn />
          </th>
          {Object.values(columnTable).map((value, i) => (
            <th key={i} title={value}>
              {t(value as Languages)}
            </th>
          ))}
        </S.HeadRow>
      </thead>
      <tbody>
        {[...Array(rowCount)].map((_, i) => (
          <S.Row key={i}>
            <S.Td>
              <Skeleton />
            </S.Td>
            {Object.keys(columnTable).map((item) => (
              <S.Td key={item}>
                <Skeleton />
              </S.Td>
            ))}
          </S.Row>
        ))}
      </tbody>
    </S.Table>
  );
};

export default CheckTableSkeleton;
