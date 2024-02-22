const getCurrentDayWithoutHours = () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return currentDate;
};

const isCurrentDay = (date) => {
  const currentDay = getCurrentDayWithoutHours();
  return currentDay.getTime() === date.getTime();
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

export {
  getCurrentDayWithoutHours,
  isCurrentDay,
  minusDay,
  plusDay,
};
