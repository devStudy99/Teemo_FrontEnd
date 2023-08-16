import dayjs from 'dayjs';

export function formatDateToMonthDay(date: any) {
  return dayjs(date).format('M월 DD');
}
