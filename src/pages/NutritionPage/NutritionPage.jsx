import { useState } from 'react';

import Calendar from '../../components/Calendar';
import DatePicker from '../../components/DatePicker';
import { getCurrentDayWithoutHours } from '../../utils/dates';
import './style.css';

const NutritionPage = () => {
  const [date, updateDate] = useState(getCurrentDayWithoutHours());
  return (
    <div className="wrapper">
      <DatePicker date={date} updateDate={updateDate} />
      <Calendar date={date} updateDate={updateDate} />
    </div>
  );
};

export default NutritionPage;
