import classNames from 'classnames';

import './style.css';

const DayUnit = ({ day }) => {
  console.log();
  return (
    <li className={classNames('day', { hidden: day === -1 })}>{day}</li>
  );
};

export default DayUnit;
