const calculateMonth = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  // определяем дни недели начала и конца месяца и последнее число месяца
  const dayone = new Date(year, month, 1).getDay();
  const lastdate = new Date(year, month + 1, 0).getDate();
  const dayend = new Date(year, month, lastdate).getDay();

  const daysOfMonths = [];
  for (let i = 1; i <= lastdate; i += 1) {
    daysOfMonths.push(new Date(year, month, i));
  }

  // рассчитываем количество дней с прошлого месяца, которые «попали» в текущий лист
  // календаря — эти дни нужно пропустить
  const startEmptyDaysCount = dayone === 0 ? 6 : dayone - 1;
  const endEmptyDaysCount = dayend === 0 ? 0 : 7 - dayend;
  const emptyDaysInStart = Array(startEmptyDaysCount).fill(null);
  const emptyDaysInEnd = Array(endEmptyDaysCount).fill(null);

  const daysOfMonthsWithEmptyDays = emptyDaysInStart.concat(daysOfMonths, emptyDaysInEnd);

  // разбиваем на двумерный массив
  const calendarData = [];

  for (let i = 0; i < daysOfMonthsWithEmptyDays.length; i += 7) {
    calendarData.push(daysOfMonthsWithEmptyDays.slice(i, i + 7));
  }
  return calendarData;
};

export default calculateMonth;
