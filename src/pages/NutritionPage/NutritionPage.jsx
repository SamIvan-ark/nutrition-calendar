import Calendar from '../../components/Calendar';
import DatePicker from '../../components/DatePicker';
import './style.css';

const NutritionPage = () => {
  console.log('lalajopa');
  return (
    <div className="wrapper">
      <DatePicker />
      <Calendar />
    </div>
  );
};

export default NutritionPage;
