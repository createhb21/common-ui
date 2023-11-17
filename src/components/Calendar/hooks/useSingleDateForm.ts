import { useCallback } from 'react';
import dayjs from 'dayjs';

const useSingleDateForm = (
  stateName: string,
  setValue: any,
  clearErrors: any,
) => {
  const handleChangeDate = useCallback((date: dayjs.Dayjs[] | []) => {
    if (date.length === 0) {
      setValue(stateName, ['']);
    } else {
      setValue(stateName, [date[0].format('YYYY/MM/DD')]);
      clearErrors(stateName);
    }
  }, []);

  return {
    handleChangeDate,
  };
};

export default useSingleDateForm;
