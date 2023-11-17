import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTranslation } from 'react-i18next';

import type { ColumnTable, Languages } from 'types';
import * as S from './Table.styled';

interface TableSkeletonProps {
  className?: string;
  columnTable: ColumnTable;
  rowCount?: number;
}

const TableSkeleton = ({
  className,
  columnTable,
  rowCount = 10,
}: TableSkeletonProps) => {
  const { t } = useTranslation();

  return (
    <S.Table className={className}>
      <thead>
        <S.HeadRow>
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

export default TableSkeleton;
