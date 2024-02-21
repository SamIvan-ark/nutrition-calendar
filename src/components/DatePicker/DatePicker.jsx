import ArrowLeft from '../../icons/ArrowLeft';
import ArrowRight from '../../icons/ArrowRight';
import CalendarIcon from '../../icons/CalendarIcon';
import './style.css';

const DatePicker = () => {
  const currentDate = new Date();
  console.log(currentDate);
  return (
    <div className="datepicker-wrapper">
      <button aria-label="Предыдущий день" className="date-control" onClick={() => console.log('lalal')} type="button">
        <ArrowLeft />
      </button>
      <div className="date-container">
        <CalendarIcon />
        <span className="date-text">24 марта</span>
      </div>
      <button aria-label="Следующий день" className="date-control" onClick={() => console.log('lalal')} type="button">
        <ArrowRight />
      </button>
    </div>
  );
};

export default DatePicker;
