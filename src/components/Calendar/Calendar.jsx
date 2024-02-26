import cn from 'classnames';
import { useState } from 'react';

import icons from '../../icons';
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

const Calendar = ({
  date, updateDate, nutritionData, setIsCalendarOpen,
}) => {
  const nextUniqueWeekId = createUniqueIdGenerator();
  const nextUniqueDayId = createUniqueIdGenerator();
  const [prepickedDay, setPrepickedDay] = useState(date);
  const [
    firstDayOfVisibleMonth,
    setFirstDayOfVisibleMonth,
  ] = useState(getFirstDayOfSameMonth(date));
  const { ArrowLeft, ArrowRight } = icons;
  const calendarData = calculateMonth(getYearAndMonthString(firstDayOfVisibleMonth));

  const handlePickDay = (day) => {
    updateDate(day);
    setIsCalendarOpen(false);
  };
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
          <li>Пн</li>
          <li>Вт</li>
          <li>Ср</li>
          <li>Чт</li>
          <li>Пт</li>
          <li>Сб</li>
          <li>Вс</li>
        </ul>
        {calendarData.map((week) => (
          <ul className="calendar-week" key={nextUniqueWeekId()}>
            {week.map((day) => {
              const currentDayNutritionData = nutritionData[day?.toDateString()];
              return (
                <DayUnit
                  currentDayNutritionData={currentDayNutritionData}
                  date={day}
                  isPrepicked={isSameDay(prepickedDay, day)}
                  key={nextUniqueDayId()}
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
