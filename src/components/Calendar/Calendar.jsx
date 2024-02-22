import { useState } from 'react';

import icons from '../../icons';
import calculateMonth from '../../utils/calculateMonth';
import { getCurrentDayWithoutHours, minusMonth, plusMonth } from '../../utils/dates';
import DayUnit from './DayUnit/DayUnit';
import './style.css';

const Calendar = () => {
  const { ArrowLeft, ArrowRight } = icons;
  const [date, setDate] = useState(getCurrentDayWithoutHours());
  const calendarData = calculateMonth(date);
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className="calendar-wrapper">
      <p>Календарь</p>
      <div className="calendar-control">
        <button
          aria-label="Предыдущий месяц"
          className="calendar-control-button"
          onClick={() => setDate(minusMonth(date))}
          type="button"
        >
          <ArrowLeft />
        </button>
        <p>{dateFormatter.format(date)}</p>
        <button
          aria-label="Следующий месяц"
          className="calendar-control-button"
          onClick={() => setDate(plusMonth(date))}
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
        <div className="calendar-body">
          <ul className="calendar-weeks">
            {week.map((day) => (
              <DayUnit day={day} key={day + Math.random()} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
