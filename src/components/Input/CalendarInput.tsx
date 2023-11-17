import React, { memo } from 'react';
import dayjs from 'dayjs';

import { CalendarBtn, Calendar } from 'components';
import { CalendarIcon } from 'assets/icon';
import * as S from './CalendarInput.styled';
import Input from './Input';

interface CalendarInputProps {
  className?: string;
  type?: 'date' | 'week' | 'free';
  value: string;
  selectedDate: string[];
  hasTime?: boolean;
  errorId?: string;
  hasError?: boolean;
  handleChange: (date: dayjs.Dayjs[] | []) => void;
  handleFocusCondition?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  handleBlurCondition?: (e?: React.FocusEvent<HTMLInputElement>) => void;
}

const CalendarInput = ({
  className,
  type,
  value,
  selectedDate,
  hasTime,
  errorId,
  hasError,
  handleChange,
  handleFocusCondition,
  handleBlurCondition,
}: CalendarInputProps) => {
  return (
    <S.Root className={className}>
      <Input
        placeholder="Select the date"
        disabled
        value={value}
        errorId={errorId}
        hasError={hasError}
      />
      <CalendarBtn
        popup={(dialogRef, isDialogOpen, handleDialogClose) => (
          <Calendar
            ref={dialogRef}
            isDialogOpen={isDialogOpen}
            hasTime={hasTime}
            as="dialog"
            type={type}
            selectedDate={selectedDate}
            handleClose={handleDialogClose}
            handleChange={handleChange}
            handleFocusCondition={handleFocusCondition}
            handleBlurCondition={handleBlurCondition}
          />
        )}
      >
        <CalendarIcon />
      </CalendarBtn>
    </S.Root>
  );
};

export default memo(CalendarInput);
