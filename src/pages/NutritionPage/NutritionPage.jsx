import { useState } from 'react';

import Calendar from '../../components/Calendar';
import DatePicker from '../../components/DatePicker';
import Questionary from '../../components/Questionary/Questionary';
import { getCurrentDayWithoutHours } from '../../utils/dates';
import './style.css';

const NutritionPage = () => {
  const [date, updateDate] = useState(getCurrentDayWithoutHours());
  const [nutritionData, setNutritionData] = useState({});
  const nutritionDataForCurrentDay = nutritionData[date.toDateString()] || undefined;
  return (
    <div className="wrapper">
      <DatePicker date={date} setIsCalendarOpen={setIsCalendarOpen} updateDate={updateDate} />
      <Questionary
        date={date}
        nutritionData={nutritionData}
        nutritionDataForCurrentDay={nutritionDataForCurrentDay}
        setNutritionData={setNutritionData}
      />
    </div>
  );
};

export default NutritionPage;
