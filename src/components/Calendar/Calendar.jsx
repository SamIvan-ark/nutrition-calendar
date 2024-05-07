import cn from 'classnames';
import { useMemo, useState } from 'react';

import { ArrowLeft, ArrowRight } from '../../icons';
import calculateMonth from '../../utils/calculateMonth';
import {
  getFirstDayOfSameMonth,
  getReadableYearAndMonthString,
  getYearAndMonthString,
  isCurrentMonth,
  isSameDay,
  minusMonth,
  plusMonth,
} from '../../utils/dates';
import createUniqueIdGenerator from '../../utils/uniqueIdGenerator';
import DayUnit from './DayUnit';
import './style.css';

const nextUniqueWeekId = createUniqueIdGenerator();
const nextUniqueDayId = createUniqueIdGenerator();
const namesOfDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const Calendar = ({
  date, updateDate, nutritionData, onCalendarToggle,
}) => {
  const [prepickedDay, setPrepickedDay] = useState(date);
  const [
    firstDayOfVisibleMonth,
    setFirstDayOfVisibleMonth,
  ] = useState(getFirstDayOfSameMonth(date));
  const calendarData = useMemo(
    () => calculateMonth(getYearAndMonthString(firstDayOfVisibleMonth), [firstDayOfVisibleMonth]),
  );

  const handlePickDay = (day) => {
    updateDate(day);
    onCalendarToggle(false);
  };
  // key={nextUniqueDayId()} выпилить, генерировать ключи при расчете месяца
  return (
    <div className="calendar-wrapper">
      <hr className="calendar-divider" />
      <p className="calendar-header">Календарь</p>
      <div className="calendar-control">
        <button
          aria-label="Предыдущий месяц"
          className="calendar-control-button"
          onClick={() => setFirstDayOfVisibleMonth(minusMonth(firstDayOfVisibleMonth))}
          type="button"
        >
          <ArrowLeft className="calendar-arrow-icon" />
        </button>
        <p>{getReadableYearAndMonthString(firstDayOfVisibleMonth)}</p>
        <button
          aria-label="Следующий месяц"
          className="calendar-control-button"
          disabled={isCurrentMonth(firstDayOfVisibleMonth)}
          onClick={() => setFirstDayOfVisibleMonth(plusMonth(firstDayOfVisibleMonth))}
          type="button"
        >
          <ArrowRight className={cn('calendar-control-button', {
            'button-disabled': isCurrentMonth(firstDayOfVisibleMonth),
          })}
          />
        </button>
      </div>
      <div className="calendar-body">
        <ul className="calendar-weekdays">
          {namesOfDays.map((dayName) => <li key={dayName}>{dayName}</li>)}
        </ul>
        {calendarData.map((week) => (
          <ul className="calendar-week" key={nextUniqueWeekId()}>
            {week.map((day) => {
              const currentDayNutritionData = nutritionData[day?.toDateString()];
              const key = nextUniqueDayId();
              console.log(key);
              return (
                <DayUnit
                  currentDayNutritionData={currentDayNutritionData}
                  date={day}
                  isPrepicked={isSameDay(prepickedDay, day)}
                  key={key}
                  setPrepickedDay={setPrepickedDay}
                />
              );
            })}
          </ul>
        ))}
      </div>

      <button className="daypicker-submit" onClick={() => handlePickDay(prepickedDay)} type="button">Выбрать</button>
    </div>
  );
};

export default Calendar;
