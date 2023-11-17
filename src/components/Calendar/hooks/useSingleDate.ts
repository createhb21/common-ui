import { useState, useCallback } from 'react';
import dayjs from 'dayjs';

const useSingleDate = () => {
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
  const value = selectedDate[0] ?? '';

  const handleChangeDate = useCallback(
    (date: dayjs.Dayjs[] | []) => {
      date.length
        ? setSelectedDate([date[0].format('YYYY/MM/DD')])
        : setSelectedDate(['']);
    },
    [selectedDate],
  );

  return { selectedDate, value, handleChangeDate };
};

export default useSingleDate;
