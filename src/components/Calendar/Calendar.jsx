import { useState } from 'react';

import icons from '../../icons';
import calculateMonth from '../../utils/calculateMonth';
import {
  isSameDay, minusMonth, plusMonth,
} from '../../utils/dates';
import DayUnit from './DayUnit/DayUnit';
import './style.css';

const Calendar = ({ date, updateDate }) => {
  const [prepickedDay, setPrepickedDay] = useState(date);
  const { ArrowLeft, ArrowRight } = icons;
  const calendarData = calculateMonth(prepickedDay);
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
        <div className="calendar-body">
          <ul className="calendar-weeks">
            {week.map((day) => (
              <DayUnit
                date={day}
                isPrepicked={isSameDay(prepickedDay, day)}
                key={day?.getDay()}
                setPrepickedDay={setPrepickedDay}
              />
            ))}
          </ul>
        </div>
      ))}
      <button className="daypicker-submit" onClick={() => updateDate(prepickedDay)} type="button">Выбрать</button>
    </div>
  );
};

export default Calendar;