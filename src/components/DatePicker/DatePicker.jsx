import classnames from 'classnames';

import icons from '../../icons';
import {
  isCurrentDay, minusDay, plusDay,
} from '../../utils/dates';
import './style.css';

const DatePicker = ({ date, updateDate, setIsCalendarOpen }) => {
  const { ArrowLeft, ArrowRight, CalendarIcon } = icons;
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
        <button
          className="date-picker"
          onClick={() => setIsCalendarOpen(true)}
          type="button"
        >
          {dateFormatter.format(date)}
        </button>
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
