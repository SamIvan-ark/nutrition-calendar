import classnames from 'classnames';
import { useState } from 'react';

import ArrowLeft from '../../icons/ArrowLeft';
import ArrowRight from '../../icons/ArrowRight';
import CalendarIcon from '../../icons/CalendarIcon';
import {
  getCurrentDayWithoutHours, isCurrentDay, minusDay, plusDay,
} from '../../utils/dates';
import './style.css';

const DatePicker = () => {
  const [date, updateDate] = useState(getCurrentDayWithoutHours());
  const pickedCurrentDay = isCurrentDay(date);
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="datepicker-wrapper">
      <button
        aria-label="Предыдущий день"
        className="date-control"
        onClick={() => updateDate(minusDay(date))}
        type="button"
      >
        <ArrowLeft />
      </button>
      <div className="date-container">
        <CalendarIcon />
        <span className="date-text">
          {dateFormatter.format(date)}
        </span>
      </div>
      <button
        aria-label="Следующий день"
        className={classnames(
          'date-control',
          { 'button-disabled': pickedCurrentDay },
        )}
        disabled={pickedCurrentDay}
        onClick={() => updateDate(plusDay(date))}
        type="button"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default DatePicker;
