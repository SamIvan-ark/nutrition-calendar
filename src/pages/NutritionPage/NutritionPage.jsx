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

  const handleUpdateDate = (newDate) => {
    updateDate(newDate);
  };
  const handleIsCalendarOpen = (isOpen) => {
    setIsCalendarOpen(isOpen);
  };
  const handleSetNutritionData = (newNutritionData) => {
    setNutritionData(newNutritionData);
  };
  const contentClasses = cn('content', { blurred: isCalendarOpen });
  return (
    <div className="wrapper">
      <main className={contentClasses}>
        <DatePicker
          date={date}
          onCalendarToggle={handleIsCalendarOpen}
          onDateUpdate={handleUpdateDate}
        />
        <Questionary
          date={date}
          nutritionData={nutritionData}
          nutritionDataForCurrentDay={nutritionDataForCurrentDay}
          onSettingNutritionData={handleSetNutritionData}
        />
      </main>
      {isCalendarOpen && (
        <Calendar
          date={date}
          nutritionData={nutritionData}
          onCalendarToggle={handleIsCalendarOpen}
          updateDate={updateDate}
        />
      )}
    </div>
  );
};

export default NutritionPage;
