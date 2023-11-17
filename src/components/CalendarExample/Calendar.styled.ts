import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ArrowIcon } from 'assets/icon';

interface RootProps {
  as?: string;
}

export const Root = styled.dialog<RootProps>`
  ${({ theme, as }) => css`
    position: ${as === 'dialog' ? 'absolute' : 'static'};
    top: calc(100% + 4px);
    width: 356px;
    height: 456px;
    border: 1px solid ${theme.color.gray_20};
    border-radius: 5px;
    padding: 23px;
    background-color: ${theme.color.white};
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.06);
    z-index: ${theme.zIndex.CALENDAR};
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MonthYear = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 8px;

    & > span {
      ${theme.font.medium_16};
      color: ${theme.color.black};
    }

    &[aria-expanded='true'] {
      svg {
        transform: rotate(180deg);
      }
    }

    :hover {
      > div:last-of-type {
        border-radius: 50%;
        background-color: ${theme.color.gray_10};
      }
    }
  `}
`;

export const MonthYearContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 4px;

    span {
      ${theme.font.medium_16};
    }
  `}
`;

export const MonthWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 4px;

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
  }
`;

export const MonthBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    width: 100%;
    height: 100%;
    border-radius: 100px;
    color: ${theme.color.black};

    &:hover {
      background-color: ${theme.color.blue_10_10};
    }

    &[aria-selected='false'] {
      &[aria-current='true'] {
        border: 1px solid ${theme.color.black};

        &:hover {
          background-color: ${theme.color.gray_10};
        }
      }
    }

    &[aria-selected='true'] {
      color: ${theme.color.white};
      background-color: ${theme.color.blue_10};
    }
  `}
`;

export const OpenMonthWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;

    & > svg {
      fill: ${theme.color.gray_60};
    }
  `}
`;

export const WeekRow = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(7, 44px);
    margin-bottom: 12px;

    > li {
      ${theme.font.regular_12};
      color: ${theme.color.gray_70};
      text-align: center;
    }
  `}
`;

export const DateRow = styled.ul`
  ${({ theme }) => css`
    ${theme.font.regular_13};
    position: relative;
    display: grid;
    grid-template-columns: repeat(7, 44px);
    row-gap: 4px;
    margin-bottom: 10px;
    color: ${theme.color.gray_70};

    > div {
      position: absolute;
      width: 100%;
      height: 44px;
      z-index: -1;

      &:nth-of-type(1) {
        top: 0;
      }

      &:nth-of-type(2) {
        top: 44px;
      }

      &:nth-of-type(3) {
        top: 88px;
      }

      &:nth-of-type(4) {
        top: 132px;
      }

      &:nth-of-type(5) {
        top: 176px;
      }

      &:nth-of-type(6) {
        top: 220px;
      }
    }
  `}
`;

export const MoveBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export const MoveBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;

    & > svg {
      fill: ${theme.color.gray_60};
    }

    :hover {
      border-radius: 50%;
      background-color: ${theme.color.gray_10};
    }
  `}
`;

export const ArrowLeftIcon = styled(ArrowIcon)`
  transform: rotate(90deg);
`;

export const ArrowRightIcon = styled(ArrowIcon)`
  transform: rotate(-90deg);
`;

export const BtnWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const resetBtn = css`
  width: 74px;
`;

export const applyBtn = css`
  flex: 1;
`;

export const DateTimeContainer = styled.div`
  margin-bottom: 20px;
`;

interface DateTimeWrapperProps {
  hasErr: boolean;
}

export const DateTimeWrapper = styled.div<DateTimeWrapperProps>`
  ${({ hasErr, theme }) => css`
    display: flex;
    align-items: center;
    width: 280px;
    height: 40px;
    border: 1px solid ${hasErr ? theme.color.red_20 : theme.color.gray_30};
    border-radius: 5px;
    padding-left: 15px;

    svg {
      width: 16px;
      height: 16px;
    }

    time {
      ${theme.font.regular_14};
    }
  `}
`;

export const DateWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 162px;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: 1.14px;
      height: 20px;
      background-color: ${theme.color.gray_30};
    }
  `}
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 115px;
  padding-left: 15px;
`;

export const TimeInput = styled.input`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    width: 50px;
    height: 20px;
    border: 0;
    padding: 0 3px;

    &:focus {
      border: 0;
    }
  `}
`;

export const timeErrorMsg = css`
  margin-top: 4px;
`;
