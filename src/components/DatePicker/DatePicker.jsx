import cn from 'classnames';

import { ArrowLeft, ArrowRight, CalendarIcon } from '../../icons';
import {
  isCurrentDay, minusDay, plusDay,
} from '../../utils/dates';
import './style.css';

const DatePicker = ({ date, onDateUpdate, onCalendarToggle }) => {
  const pickedCurrentDay = isCurrentDay(date);
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="datepicker-wrapper">
      <nav className="datepicker">
        <button
          aria-label="Предыдущий день"
          className="date-control"
          onClick={() => onDateUpdate(minusDay(date))}
          type="button"
        >
          <ArrowLeft className="arrow-icon" />
        </button>
        <div className="date-container">
          <CalendarIcon />
          <button
            className="date-picker"
            onClick={() => onCalendarToggle(true)}
            type="button"
          >
            {dateFormatter.format(date)}
          </button>
        </div>
        <button
          aria-label="Следующий день"
          className={cn(
            'date-control',
            { 'button-disabled': pickedCurrentDay },
          )}
          disabled={pickedCurrentDay}
          onClick={() => onDateUpdate(plusDay(date))}
          type="button"
        >
          <ArrowRight className="arrow-icon" />
        </button>
      </nav>
    </div>
  );
};

export default DatePicker;
