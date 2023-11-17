import dayjs from 'dayjs';

export const getCurrentDateTime = () => dayjs().format('DD/MM/YY HH:mm');
