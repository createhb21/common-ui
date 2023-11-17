import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash-es';

import { CheckboxBtn, Portal } from 'components';
import { WarningIcon } from 'assets/icon';
import type { ColumnTable, Languages } from 'types';
import * as S from './Table.styled';

interface TableProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  columnTable: ColumnTable;
  hasCheckbox?: boolean;
  isAllChecked?: boolean;
  handleAllCheck?: () => void;
}

interface RowProps {
  className?: string;
  children: React.ReactNode;
  handleMouseOver?: React.MouseEventHandler<HTMLElement>;
  handleMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

interface SelectableRowProps extends RowProps {
  id: string;
  isSelected?: boolean;
  selectFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface TdProps {
  className?: string;
  children: React.ReactNode;
}

const Table = ({
  className,
  children,
  title = '',
  columnTable,
  hasCheckbox,
  isAllChecked,
  handleAllCheck,
}: TableProps) => {
  const { t } = useTranslation();

  return (
    <S.Table className={className}>
      <caption className="a11y">{title}</caption>
      <thead>
        <S.HeadRow>
          {hasCheckbox && (
            <th>
              <CheckboxBtn
                isChecked={isAllChecked}
                handleCheck={handleAllCheck}
              />
            </th>
          )}
          {Object.values(columnTable).map((value, i) => (
            <th key={i} title={value}>
              {t(value as Languages)}
            </th>
          ))}
        </S.HeadRow>
      </thead>
      <S.Tbody>{isEmpty(children) ? <Table.NoData /> : children}</S.Tbody>
    </S.Table>
  );
};

Table.Row = function Row({
  className,
  children,
  handleMouseOver,
  handleMouseLeave,
}: RowProps) {
  return (
    <S.Row
      className={className}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </S.Row>
  );
};

Table.SelectRow = function SelectRow({
  className,
  children,
  id,
  isSelected = false,
  selectFn,
}: SelectableRowProps) {
  const [domReady, setDomReady] = useState(false);

  const rowId = `table-row-${id}`;

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <>
      <S.SelectRow className={className} id={rowId} isSelected={isSelected}>
        {children}
      </S.SelectRow>
      <Portal
        selector={`#${rowId} > td:nth-last-of-type(2)`}
        mounted={domReady}
      >
        <S.RowBtn type="button" onClick={selectFn}>
          <span className="a11y">select row</span>
        </S.RowBtn>
      </Portal>
    </>
  );
};

Table.Td = function Td({ className, children }: TdProps) {
  return <S.Td className={className}>{children}</S.Td>;
};

Table.NoData = function NoData() {
  const { t } = useTranslation();

  return (
    <S.NoData>
      <td>
        <WarningIcon />
        {t('No history') as Languages}
      </td>
    </S.NoData>
  );
};

export default Table;
