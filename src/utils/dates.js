const getCurrentDayWithoutHours = () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return currentDate;
};

const getFirstDayOfSameMonth = (date) => {
  const newDate = new Date(date);
  newDate.setDate(1);
  return newDate;
};

const isCurrentDay = (date) => {
  const currentDay = getCurrentDayWithoutHours();
  return currentDay.getTime() === date.getTime();
};

const isCurrentMonth = (date) => {
  const currentMonth = getFirstDayOfSameMonth(getCurrentDayWithoutHours());
  return currentMonth.getTime() === date.getTime();
};

const getYearAndMonthString = (date) => `${date.getFullYear()} ${date.getMonth()}`;

const getReadableYearAndMonthString = (date) => {
  const [year, month] = getYearAndMonthString(date).split(' ');
  return new Date(year, month)
    .toLocaleString('ru', { month: 'long', year: 'numeric' })
    .slice(0, -3);
};

const isSameDay = (date1, date2) => {
  if (!date1 || !date2) {
    return false;
  }
  return date1.getTime() === date2.getTime();
};

const plusDay = (date) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);
  return newDate;
};

const minusDay = (date) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 1);
  return newDate;
};

const plusMonth = (date) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
};

const minusMonth = (date) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
};

const isDayInFuture = (date) => {
  const currentDate = getCurrentDayWithoutHours();
  return date.getTime() > currentDate.getTime();
};

export {
  getCurrentDayWithoutHours,
  getFirstDayOfSameMonth,
  getReadableYearAndMonthString,
  getYearAndMonthString,
  isCurrentDay,
  isCurrentMonth,
  isDayInFuture,
  isSameDay,
  minusDay,
  minusMonth,
  plusDay,
  plusMonth,
};
