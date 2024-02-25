import cn from 'classnames';
import { useState } from 'react';

import Calendar from '../../components/Calendar';
import DatePicker from '../../components/DatePicker';
import Questionary from '../../components/Questionary/Questionary';
import { getCurrentDayWithoutHours } from '../../utils/dates';
import './style.css';

const NutritionPage = () => {
  const [date, updateDate] = useState(getCurrentDayWithoutHours());
  const [nutritionData, setNutritionData] = useState({});
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const nutritionDataForCurrentDay = nutritionData[date.toDateString()] || undefined;

  const contentClasses = cn('content', { blurred: isCalendarOpen });
  return (
    <div className="wrapper">
      <main className={contentClasses}>
        <DatePicker date={date} setIsCalendarOpen={setIsCalendarOpen} updateDate={updateDate} />
        <Questionary
          date={date}
          nutritionData={nutritionData}
          nutritionDataForCurrentDay={nutritionDataForCurrentDay}
          setNutritionData={setNutritionData}
        />
      </main>
      {isCalendarOpen
        ? (
          <Calendar
            date={date}
            nutritionData={nutritionData}
            setIsCalendarOpen={setIsCalendarOpen}
            updateDate={updateDate}
          />
        )
        : null}
    </div>
  );
};

export default NutritionPage;
