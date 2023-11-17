import React from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { formatDate } from 'utils/formatter';
import { ResetIcon, DownloadIcon } from 'assets/icon';
import type { Languages } from 'types';
import Table from './table/Table';
import CheckTable from './checkTable/CheckTable';
import * as S from './DataSection.styled';
import { Button } from 'components';

interface DataSectionProps {
  className?: string;
  children: React.ReactNode;
  totalData: number;
  activeBtns?: React.ReactNode;
  lastFetchDateTime?: string;
  handleReFetch?: () => void;
}

interface ActiveWrapperProps {
  activeBtn: React.ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
  handleConfirm?: (e: React.MouseEvent) => void;
  handleUnActiveCheckTable?: () => void;
}

interface ExcelDownloadBtnProps {
  className?: string;
  handleDownload: () => void;
}

export interface ActiveBtnProps {
  className?: string;
  label: string;
  variant?: 'primary' | 'secondary';
  handleClickActiveBtn: () => void;
}

const DataSection = ({
  children,
  className,
  totalData,
  activeBtns,
  lastFetchDateTime,
  handleReFetch,
}: DataSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className={className}>
      <S.Header>
        <S.LeftContent>
          <h2>
            {t('List' as Languages)}&#32;(
            {totalData})
          </h2>
          <S.Refetch>
            <span>{t('Latest updated' as Languages)}:</span>
            <time>{lastFetchDateTime || formatDate(dayjs())}</time>
            <S.RefetchBtn type="button" onClick={handleReFetch}>
              <ResetIcon />
            </S.RefetchBtn>
          </S.Refetch>
        </S.LeftContent>
        {activeBtns}
      </S.Header>
      {children}
    </section>
  );
};

DataSection.ActiveWrapper = function ActiveWrapper({
  activeBtn,
  isActive,
  isDisabled,
  handleConfirm,
  handleUnActiveCheckTable,
}: ActiveWrapperProps) {
  return (
    <S.ActiveWrapper>
      {isActive ? (
        <>
          <Button
            variant="secondary"
            label="Cancel"
            handleClickBtn={handleUnActiveCheckTable}
          />
          <Button
            isDisabled={!isDisabled}
            variant="primary"
            label="Confirm"
            handleClickBtn={handleConfirm}
          />
        </>
      ) : (
        <>{activeBtn}</>
      )}
    </S.ActiveWrapper>
  );
};

DataSection.ExcelDownloadBtn = function ExcelDownloadBtn({
  handleDownload,
}: ExcelDownloadBtnProps) {
  return (
    <Button
      icon={<DownloadIcon />}
      variant="secondary"
      label="Download"
      handleClickBtn={handleDownload}
    />
  );
};

DataSection.ActiveBtn = function CheckTableActiveBtn({
  className,
  label,
  variant = 'secondary',
  handleClickActiveBtn,
}: ActiveBtnProps) {
  return (
    <Button
      className={className}
      variant={variant}
      label={label}
      handleClickBtn={handleClickActiveBtn}
    />
  );
};

DataSection.Table = Table;

DataSection.CheckTable = CheckTable;

export default DataSection;
