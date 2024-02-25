import './style.css';

const Questionary = ({
  nutritionDataForCurrentDay,
  setNutritionData,
  nutritionData,
  date,
}) => {
  const text = 'Hello, World!';
  const handleSetEntry = (value) => {
    const newData = { ...nutritionData };
    newData[date.toDateString()] = value;
    setNutritionData(newData);
  };
  const handleDeleteEntry = () => {
    const newData = { ...nutritionData };
    delete newData[date.toDateString()];
    setNutritionData(newData);
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
