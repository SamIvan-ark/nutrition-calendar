import cn from 'classnames';

import { isDayInFuture } from '../../../utils/dates';
import './style.css';

const DayUnit = ({
  date,
  setPrepickedDay,
  isPrepicked,
  currentDayNutritionData,
}) => {
  const day = date?.getDate();
  if (day === undefined) {
    return (
      <li className="day hidden">
        <button aria-label="День другого месяца" className="daypicker-button" type="button" />
      </li>
    );
  }
  const classes = cn('day', {
    hidden: day === undefined,
    'day-prepicked': isPrepicked,
    weekend: date?.getDay() === 0 || date?.getDay() === 6,
    inactive: isDayInFuture(date),
    dashed: !isDayInFuture(date),
    [`rate-${currentDayNutritionData}`]: !!currentDayNutritionData,
  });
  return (
    <li className={classes}>
      <button className="daypicker-button" disabled={isDayInFuture(date)} onClick={() => setPrepickedDay(date)} type="button">{day}</button>
    </li>
  );
};

export default DayUnit;
