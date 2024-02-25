import { useState } from 'react';

import icons from '../../icons';
import calculateMonth from '../../utils/calculateMonth';
import {
  isSameDay, minusMonth, plusMonth,
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
  const { ArrowLeft, ArrowRight } = icons;
  const calendarData = calculateMonth(prepickedDay);
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    year: 'numeric',
  });

  const handlePickDay = (day) => {
    updateDate(day);
    setIsCalendarOpen(false);
  };

  return (
    <div className="calendar-wrapper">
      <p>Календарь</p>
      <div className="calendar-control">
        <button
          aria-label="Предыдущий месяц"
          className="calendar-control-button"
          onClick={() => setPrepickedDay(minusMonth(prepickedDay))}
          type="button"
        >
          <ArrowLeft />
        </button>
        <p>{dateFormatter.format(date)}</p>
        <button
          aria-label="Следующий месяц"
          className="calendar-control-button"
          onClick={() => setPrepickedDay(plusMonth(prepickedDay))}
          type="button"
        >
          <ArrowRight />
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
      </div>
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
        </div>
      ))}
      <button className="daypicker-submit" onClick={() => handlePickDay(prepickedDay)} type="button">Выбрать</button>
    </div>
  );
};

export default Calendar;
