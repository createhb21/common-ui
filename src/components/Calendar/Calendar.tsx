import React, { useCallback, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { Button, ErrorMsg } from 'components';
import { ArrowIcon, CalendarIcon, TimeIcon } from 'assets/icon';
import { MONTH, WEEKS } from 'assets/static';
import type { Languages } from 'types';
import Date from './Date';
import useCalendar from './hooks/useCalendar';
import useTimePicker from './hooks/useTimePicker';
import * as S from './Calendar.styled';

interface CalendarProps {
  className?: string;
  isDialogOpen?: boolean;
  hasTime?: boolean;
  type?: Readonly<'date' | 'week' | 'free'>;
  as?: React.ElementType & string;
  selectedDate: string[];
  handleChange: (date: dayjs.Dayjs[] | []) => void;
  handleClose?: () => void;
  handleFocusCondition?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  handleBlurCondition?: (e?: React.FocusEvent<HTMLInputElement>) => void;
}

const Calendar = React.forwardRef(
  (
    {
      className,
      isDialogOpen,
      hasTime = false,
      as = 'div',
      type = 'date',
      selectedDate,
      handleChange,
      handleClose,
      handleFocusCondition,
      handleBlurCondition,
    }: CalendarProps,
    ref: React.ForwardedRef<HTMLDialogElement>,
  ) => {
    const { t } = useTranslation();

    const {
      monthYear,
      getWeekPeriodFromWed,
      handleChangeDate,
      handleChangeMonth,
      handleChangePrevMonth,
      handleChangeNextMonth,
      handleChangePrevYear,
      handleChangeNextYear,
      handleResetMonthYear,
    } = useCalendar(selectedDate, handleChange);

    const {
      time,
      timeErr,
      getTimeAppliedDate,
      applyTime,
      handleChangeTime,
      handleBlurTime,
      handleResetTime,
      handleResetTimeErr,
    } = useTimePicker(selectedDate[0], handleChange);

    const initSelectedDate = selectedDate.map((date) =>
      dayjs(date, 'YYYY/MM/DD'),
    );
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredDate, setHoveredDate] = useState<dayjs.Dayjs | string>('');
    const [currentDate, setCurrentDate] = useState<dayjs.Dayjs[] | []>(
      initSelectedDate,
    );

    const isDisabled =
      (type === 'free' && currentDate.length === 0) || !!timeErr;

    const handleOpen = () => {
      setIsOpen(!isOpen);
    };

    const changeHoveredDate = useCallback(
      (date: dayjs.Dayjs | string) => {
        setHoveredDate(date);
      },
      [hoveredDate],
    );

    const handleClickMonth = (month: number) => () => {
      handleChangeMonth(month);
    };

    const handleClickDate = (date: dayjs.Dayjs[]) => () => {
      if (type === 'free') {
        date.sort((a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1));
      }
      setCurrentDate(date);
    };

    const handleReset = () => {
      handleResetMonthYear();
      setCurrentDate([]);

      if (hasTime) {
        handleResetTime();
        handleResetTimeErr();
      }
    };

    const handleApply = () => {
      if (hasTime) {
        applyTime(currentDate[0], time);
        const dateTime = [getTimeAppliedDate(dayjs(currentDate[0]), time)];
        handleChangeDate(dateTime);
      } else {
        handleChangeDate(currentDate);
      }

      typeof handleClose === 'function' && !timeErr && handleClose();
    };

    const handleMouseLeave = useCallback(() => {
      hoveredDate && changeHoveredDate('');
    }, [hoveredDate]);

    useEffect(() => {
      if (isDialogOpen && timeErr) {
        handleResetTime();
        handleResetTimeErr();
      }

      if (isDialogOpen) {
        handleFocusCondition && handleFocusCondition();
      } else {
        handleBlurCondition && handleBlurCondition();
      }
    }, [isDialogOpen]);

    return (
      <S.Root
        ref={ref}
        className={className}
        aria-modal="true"
        open={isDialogOpen}
        as={as}
      >
        <S.Header>
          <S.MonthYear
            type="button"
            aria-controls="month-list"
            aria-expanded={isOpen}
            aria-label="open month list"
            onClick={handleOpen}
          >
            <S.MonthYearContent>
              <span>{t(monthYear.value.format('MMM') as Languages)}</span>
              <span>{monthYear.value.format('YYYY')}</span>
            </S.MonthYearContent>
            <S.OpenMonthWrapper>
              <ArrowIcon />
            </S.OpenMonthWrapper>
          </S.MonthYear>
          <S.MoveBtnWrapper>
            <S.MoveBtn
              type="button"
              aria-label="move previous month"
              onClick={isOpen ? handleChangePrevYear : handleChangePrevMonth}
            >
              <S.ArrowLeftIcon />
            </S.MoveBtn>
            <S.MoveBtn
              type="button"
              aria-label="move next month"
              onClick={isOpen ? handleChangeNextYear : handleChangeNextMonth}
            >
              <S.ArrowRightIcon />
            </S.MoveBtn>
          </S.MoveBtnWrapper>
        </S.Header>
        {isOpen ? (
          <S.MonthWrapper id="month-list">
            {Object.entries(MONTH).map(([label, value]) => (
              <li key={value}>
                <S.MonthBtn
                  type="button"
                  aria-current={
                    value === +monthYear.currentMonth &&
                    monthYear.year === monthYear.currentYear
                  }
                  aria-selected={+monthYear.month === value}
                  onClick={handleClickMonth(value)}
                >
                  {t(label as Languages)}
                </S.MonthBtn>
              </li>
            ))}
          </S.MonthWrapper>
        ) : (
          <>
            <S.WeekRow>
              {WEEKS.map((week) => (
                <li key={week}>{t(week as Languages)}</li>
              ))}
            </S.WeekRow>
            <S.DateRow
              className={className}
              data-status={type}
              onMouseLeave={handleMouseLeave}
            >
              {[...Array(monthYear.firstDOW)].map((_, i) => (
                <Date
                  key={i}
                  currentDate={currentDate}
                  date={monthYear.firstWeekPrevMonthDate.add(i, 'd')}
                  disabled={type === 'date'}
                  hoveredDate={hoveredDate}
                  idx={i}
                  type={type}
                  changeMonth={handleChangePrevMonth}
                  changeHoveredDate={changeHoveredDate}
                  getWeekPeriodFromWed={getWeekPeriodFromWed}
                  handleClick={handleClickDate}
                />
              ))}
              {[...Array(monthYear.lastDate)].map((_, i) => {
                const date = monthYear.startDate.add(i, 'd');

                return (
                  <Date
                    key={i}
                    currentDate={currentDate}
                    date={date}
                    hoveredDate={hoveredDate}
                    idx={i + monthYear.firstDOW}
                    isThisMonth={true}
                    type={type}
                    getWeekPeriodFromWed={getWeekPeriodFromWed}
                    changeHoveredDate={changeHoveredDate}
                    handleClick={handleClickDate}
                  />
                );
              })}
              {[...Array(42 - (monthYear.firstDOW + monthYear.lastDate))].map(
                (_, i) => (
                  <Date
                    key={i}
                    currentDate={currentDate}
                    date={monthYear.nextMonthStartDate.add(i, 'd')}
                    disabled={type === 'date'}
                    hoveredDate={hoveredDate}
                    idx={monthYear.firstDOW + monthYear.lastDate + i}
                    type={type}
                    changeMonth={handleChangeNextMonth}
                    getWeekPeriodFromWed={getWeekPeriodFromWed}
                    changeHoveredDate={changeHoveredDate}
                    handleClick={handleClickDate}
                  />
                ),
              )}
              {/* row(6) * column(7) 캘린더에서 각각의 row를 담당하며,
                  date hover시 담당 div의 길이를 이용하여 css를 표현하기 위해 사용 */}
              <div /> {/* 첫 번째 row */}
              <div /> {/* 두 번째 row */}
              <div /> {/* 세 번째 row */}
              <div /> {/* 네 번째 row */}
              <div /> {/* 다섯 번째 row */}
              <div /> {/* 여섯 번째 row */}
            </S.DateRow>
          </>
        )}
        {hasTime && (
          <S.DateTimeContainer>
            <S.DateTimeWrapper hasErr={!!timeErr}>
              <S.DateWrapper>
                <CalendarIcon />
                {currentDate && (
                  <time>{dayjs(currentDate[0]).format('DD/MM/YYYY')}</time>
                )}
              </S.DateWrapper>
              <S.TimeWrapper>
                <TimeIcon />
                <S.TimeInput
                  value={time}
                  onChange={handleChangeTime}
                  onBlur={handleBlurTime}
                />
              </S.TimeWrapper>
            </S.DateTimeWrapper>
            <ErrorMsg message={timeErr} />
          </S.DateTimeContainer>
        )}
        {!isOpen && (
          <S.BtnWrapper>
            <Button
              variant="secondary"
              label="Reset"
              handleClickBtn={handleReset}
            />
            <Button
              isDisabled={isDisabled}
              variant="primary"
              label="Apply"
              handleClickBtn={handleApply}
            />
          </S.BtnWrapper>
        )}
      </S.Root>
    );
  },
);

Calendar.displayName = 'Calendar';

export default Calendar;
