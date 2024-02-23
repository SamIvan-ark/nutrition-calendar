const getCurrentDayWithoutHours = () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return currentDate;
};

const isCurrentDay = (date) => {
  const currentDay = getCurrentDayWithoutHours();
  return currentDay.getTime() === date.getTime();
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
  isCurrentDay,
  isDayInFuture,
  isSameDay,
  minusDay,
  minusMonth,
  plusDay,
  plusMonth,
};
