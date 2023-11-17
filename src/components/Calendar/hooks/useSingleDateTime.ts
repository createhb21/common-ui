import { useState, useCallback } from 'react';
import dayjs from 'dayjs';

const useSingleDateTime = () => {
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
  const value = selectedDate[0] ?? '';

  const handleChangeDate = useCallback(
    (date: dayjs.Dayjs[] | []) => {
      date.length
        ? setSelectedDate([date[0].format('YYYY/MM/DD, HH:mm')])
        : setSelectedDate(['']);
    },
    [selectedDate],
  );

  return { selectedDate, value, handleChangeDate };
};

export default useSingleDateTime;
