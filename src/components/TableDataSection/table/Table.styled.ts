import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    height: 883px;
    border: 1px solid ${theme.color.gray_20};
    border-bottom: 0;
    cursor: default;

    & > tbody > tr:nth-of-type(20) {
      border-bottom: 0;
    }
  `}
`;

const TableRow = styled.tr`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    height: 42px;
    border-bottom: 1px solid ${theme.color.gray_20};
    padding: 0px 12px;
  `}
`;

export const Tbody = styled.tbody`
  > tr:nth-of-type(20) {
    border-bottom: 0;
  }
`;

export const HeadRow = styled(TableRow)`
  ${({ theme }) => css`
    ${theme.font.medium_13};
    background-color: ${theme.color.gray_10};

    & > th {
      display: block;
      padding: 0px 12px;
      color: ${theme.color.gray_60};
      text-align: left;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    & > :last-child {
      border-right: 0;
    }
  `}
`;

export const Row = styled(TableRow)`
  & > :last-child {
    border-right: 0;
  }

  :nth-of-type(20) {
    border-bottom: 0;
  }
`;

interface SelectableRowProps {
  isSelected: boolean;
}

export const SelectRow = styled(TableRow)<SelectableRowProps>`
  ${({ theme, isSelected }) => css`
    background-color: ${isSelected && theme.color.gray_10};

    &:hover {
      background-color: ${theme.color.gray_10};
    }
  `}
`;

export const RowBtn = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:focus-visible {
      position: absolute;
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: ${theme.zIndex.TABLE_SELECT_ROW};
    }
  `}
`;

export const Td = styled.td`
  ${({ theme }) => css`
    ${theme.font.regular_13};
    display: block;
    padding: 0px 12px;
    color: ${theme.color.black};
    text-align: left;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const NoData = styled.tr`
  ${({ theme }) => css`
    & > td {
      ${theme.font.regular_14};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: ${theme.color.gray_60};
    }
  `}
`;

export const noResultIcon = (theme: Theme) => css`
  width: 52px;
  height: 52px;
  margin-bottom: 8px;
  fill: ${theme.color.gray_50};
`;
