import ArrowLeft from '../../icons/ArrowLeft';
import './style.css';

const DatePicker = () => {
  const currentDate = new Date();
  console.log(currentDate);
  return (
    <div className="wrapper">
      <ArrowLeft />
    </div>
  );
};

export default DatePicker;
