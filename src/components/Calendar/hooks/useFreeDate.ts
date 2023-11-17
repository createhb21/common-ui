import { useState, useCallback } from 'react';
import dayjs from 'dayjs';

const useFreeDate = () => {
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
  const value = selectedDate[0]
    ? `${selectedDate[0]} ~ ${selectedDate[selectedDate.length - 1]}`
    : '';

  const handleChangeDate = useCallback(
    (date: dayjs.Dayjs[] | []) => {
      if (date.length === 0) {
        setSelectedDate(['']);
      } else {
        const days = date.map((item) => item.format('YYYY/MM/DD'));
        setSelectedDate(days);
      }
    },
    [selectedDate],
  );

  return { selectedDate, value, handleChangeDate };
};

export default useFreeDate;
