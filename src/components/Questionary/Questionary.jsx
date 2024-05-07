import './style.css';

const text = 'Hello, World!';

const Questionary = ({
  nutritionDataForCurrentDay,
  onSettingNutritionData,
  date,
}) => {
  const handleSetEntry = (value) => {
    onSettingNutritionData((prevState) => ({
      ...prevState,
      [date.toDateString()]: value,
    }));
  };
  const handleDeleteEntry = () => {
    onSettingNutritionData((prevState) => ({
      ...prevState,
      [date.toDateString()]: undefined,
    }));
  };

  if (!nutritionDataForCurrentDay) {
    return (
      <div className="questionary-wrapper">
        <button className="day-grade grade-good" onClick={() => handleSetEntry('good')} type="button">{text}</button>
        <button className="day-grade grade-bad" onClick={() => handleSetEntry('bad')} type="button">{text}</button>
        <button className="day-grade grade-neutral" onClick={() => handleSetEntry('neutral')} type="button">{text}</button>
      </div>
    );
  }
  return (
    <div className="questionary-wrapper">
      <p className={`day-grade grade-${nutritionDataForCurrentDay}`}>{text}</p>
      <button className="day-grade grade-reset" onClick={() => handleDeleteEntry()} type="button">Изменить выбор</button>
    </div>
  );
};

export default Questionary;
