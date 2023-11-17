import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { CheckboxBtn, Portal } from 'components';
import { WarningIcon, CloseIcon } from 'assets/icon';
import type { ColumnTable, Languages } from 'types';
import * as S from './CheckTable.styled';

interface CheckTableProps {
  className?: string;
  children: React.ReactNode;
  toolBtns?: React.ReactNode;
  title?: string;
  columnTable: ColumnTable;
  selectedCount?: number;
  isAllChecked: boolean;
  handleAllCheck?: () => void;
  handleAllUnCheck?: () => void;
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

const CheckTable = ({
  className,
  children,
  toolBtns,
  title,
  columnTable,
  selectedCount,
  isAllChecked,
  handleAllCheck,
  handleAllUnCheck,
}: CheckTableProps) => {
  const { t } = useTranslation();

  return (
    <>
      {selectedCount !== 0 && (
        <S.ToolBoxWrapper>
          <S.ToolBox>
            <S.SelectedCount>
              {selectedCount} {t('Selected' as Languages)}
            </S.SelectedCount>
            {toolBtns && toolBtns}
          </S.ToolBox>
          <button
            type="button"
            aria-label="close checked info"
            onClick={handleAllUnCheck}
          >
            <CloseIcon />
          </button>
        </S.ToolBoxWrapper>
      )}
      <S.Table className={className}>
        <caption className="a11y">{title}</caption>
        <thead>
          <S.HeadRow>
            <th>
              <CheckboxBtn
                isChecked={isAllChecked}
                handleCheck={handleAllCheck}
              />
            </th>
            {Object.values(columnTable).map((value, i) => (
              <th key={i} title={value}>
                {t(value as Languages)}
              </th>
            ))}
          </S.HeadRow>
        </thead>
        <tbody>{children}</tbody>
      </S.Table>
    </>
  );
};

CheckTable.Row = function Row({
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

CheckTable.SelectRow = function SelectRow({
  className,
  children,
  id,
  isSelected = false,
  selectFn: selectCb,
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
      <Portal selector={`#${rowId} > td:nth-of-type(1)`} mounted={domReady}>
        <S.RowBtn type="button" onClick={selectCb}>
          <span className="a11y">select row</span>
        </S.RowBtn>
      </Portal>
    </>
  );
};

CheckTable.Td = function Td({ className, children }: TdProps) {
  return <S.Td className={className}>{children}</S.Td>;
};

CheckTable.NoData = function NoData() {
  const { t } = useTranslation();

  return (
    <S.NoData>
      <td>
        <WarningIcon /> {t('No history') as Languages}
      </td>
    </S.NoData>
  );
};

export default CheckTable;
