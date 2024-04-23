const COUNT_OF_DAYS_IN_WEEK = 7;
const COUNT_OF_DAYS_IN_WEEK_MINUS_ONE = 6;
const SUNDAY_INDEX = 0;

const calculateMonth = (monthAndYearString) => {
  const [year, month] = monthAndYearString
    .split(' ')
    .map(Number);

  // определяем дни недели начала и конца месяца и последнее число месяца
  const dayone = new Date(year, month).getDay();
  const lastdate = new Date(year, month + 1, 0).getDate();
  const dayend = new Date(year, month, lastdate).getDay();

  const daysOfMonths = [];
  for (let i = 1; i <= lastdate; i += 1) {
    daysOfMonths.push(new Date(year, month, i));
  }

  // рассчитываем количество дней с прошлого и следующего месяца,
  // которые «попали» в текущий лист календаря — эти дни нужно пропустить

  const startEmptyDaysCount = dayone === SUNDAY_INDEX
    ? COUNT_OF_DAYS_IN_WEEK_MINUS_ONE
    : dayone - 1;
  const endEmptyDaysCount = dayend === SUNDAY_INDEX ? 0 : COUNT_OF_DAYS_IN_WEEK - dayend;

  const emptyDaysInStart = Array(startEmptyDaysCount).fill(null);
  const emptyDaysInEnd = Array(endEmptyDaysCount).fill(null);

  const daysOfMonthsWithEmptyDays = emptyDaysInStart.concat(daysOfMonths, emptyDaysInEnd);

  // разбиваем на двумерный массив
  const calendarData = [];
  for (let i = 0; i < daysOfMonthsWithEmptyDays.length; i += COUNT_OF_DAYS_IN_WEEK) {
    calendarData.push(daysOfMonthsWithEmptyDays.slice(i, i + COUNT_OF_DAYS_IN_WEEK));
  }
  return calendarData;
};

export default calculateMonth;
